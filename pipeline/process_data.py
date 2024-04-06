from sqlalchemy import create_engine, MetaData
from sqlalchemy.dialects.postgresql import insert
import pandas as pd
import sys
import pprint

# Database connection details
DATABASE = 'postgres'
USER = 'pipeline_user'
PASSWORD = 'pipeline_password'
HOST = 'localhost'
PORT = '5432'
DB_STRING = f"postgresql://{USER}:{PASSWORD}@{HOST}:{PORT}/{DATABASE}"

engine = create_engine(DB_STRING)
metadata = MetaData()
metadata.reflect(bind=engine, schema='webapp_schema')

def fetch_data(query):
    """Fetch data from PostgreSQL database."""
    try:
        with engine.connect() as conn:
            return pd.read_sql_query(query, conn)
    except Exception as e:
        print(f"Error fetching data: {e}")
        sys.exit(1)

def upsert_data(table_name, dataframe, unique_cols):
    """Upsert data into PostgreSQL table."""
    full_table_name = f'webapp_schema.{table_name}'
    table = metadata.tables.get(full_table_name)

    if table is None:
        print(f"Table '{table_name}' not found.")
        sys.exit(1)

    try:
        with engine.begin() as conn:
            for index, row in dataframe.iterrows():
                row_dict = row.to_dict()
                row_dict['date'] = row_dict['date'].to_pydatetime()
                insert_stmt = insert(table).values(**row_dict)
                on_conflict_stmt = insert_stmt.on_conflict_do_update(
                    index_elements=unique_cols,
                    set_={c.key: c for c in insert_stmt.excluded
                          if c.key not in unique_cols}
                )
                conn.execute(on_conflict_stmt)
    except Exception as e:
        print(f"Error upserting data: {e}")
        sys.exit(1)

# Data fetching and preparation
try:
    wilshire_data = fetch_data(
        'SELECT date, will5000pr FROM pipeline_schema.wilshire_price_index ORDER BY date;'
    )
    gdp_data = fetch_data(
        'SELECT date, gdp FROM pipeline_schema.gdp_value ORDER BY date;'
    )

    # Data conversion and indexing
    wilshire_data['date'] = pd.to_datetime(wilshire_data['date'])
    gdp_data['date'] = pd.to_datetime(gdp_data['date'])
    wilshire_data.set_index('date', inplace=True)
    gdp_data.set_index('date', inplace=True)

    # Data analysis and calculation
    wilshire_quarterly = wilshire_data.resample('Q').last()
    wilshire_quarterly['quarter'] = wilshire_quarterly.index.to_period('Q')
    gdp_quarterly_mapped = gdp_data.groupby(gdp_data.index.to_period('Q'))['gdp'].first()

    # Combine the quarterly data into one DataFrame
    combined_quarterly = wilshire_quarterly.join(gdp_quarterly_mapped, on='quarter')

    # Now, calculate the growth rates on the combined DataFrame
    combined_quarterly['wilshire_growth_rate'] = combined_quarterly['will5000pr'].pct_change() * 100
    combined_quarterly['gdp_growth_rate'] = combined_quarterly['gdp'].pct_change() * 100

    # Implement the formula to get the "buffett_indicator"
    combined_quarterly['buffett_indicator'] = (combined_quarterly['will5000pr'] / combined_quarterly['gdp']) * 100

    # Additional calculations as before
    combined_quarterly['moving_average_6m'] = combined_quarterly['buffett_indicator'].rolling(window=2).mean()
    combined_quarterly['moving_average_12m'] = combined_quarterly['buffett_indicator'].rolling(window=4).mean()
    combined_quarterly['volatility_12m'] = combined_quarterly['buffett_indicator'].rolling(window=4).std()

    # Preparing DataFrames for database insertion
    combined_quarterly.reset_index(inplace=True)
    combined_quarterly['date'] = combined_quarterly['date'].dt.to_period('Q').dt.to_timestamp('Q')

    market_insights_data = combined_quarterly[['date', 'buffett_indicator', 'will5000pr', 'gdp', 'gdp_growth_rate', 'wilshire_growth_rate']].copy()
    market_insights_data.rename(columns={
        'buffett_indicator': 'buffett_indicator',
        'will5000pr': 'wilshire_value',
        'gdp': 'gdp_value'
    }, inplace=True)
    market_insights_data['date'] = pd.to_datetime(market_insights_data['date'])

    market_trends_data = combined_quarterly[[
        'date', 'buffett_indicator', 'moving_average_6m', 'moving_average_12m', 'volatility_12m']].copy()
    market_trends_data['date'] = pd.to_datetime(market_trends_data['date'])

    # Upsert operations
    upsert_data('market_insights', market_insights_data, ['date'])
    market_trends_data.dropna(inplace=True)
    upsert_data('market_trends', market_trends_data, ['date'])

    print("Trend analysis data successfully updated in 'webapp_schema.market_trends'.")
except Exception as e:
    print(f"An error occurred: {e}")
    sys.exit(1)
