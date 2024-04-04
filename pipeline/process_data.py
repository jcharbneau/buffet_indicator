import psycopg2
import pandas as pd
import pprint


# Database connection parameters
params = {
    'database': 'postgres',
    'user': 'pipeline_user',
    'password': 'pipeline_password',
    'host': 'localhost',
    'port': '5432'
}

from sqlalchemy import create_engine
import pandas as pd

# Database connection parameters
database = 'postgres'
user = 'pipeline_user'
password = 'pipeline_password'
host = 'localhost'
port = '5432'
db_string = f"postgresql://{user}:{password}@{host}:{port}/{database}"

engine = create_engine(db_string)

def fetch_data(query):
    """Fetch data from PostgreSQL database using sqlalchemy."""
    with engine.connect() as conn:
        return pd.read_sql_query(query, conn)

# Queries to fetch Wilshire and GDP data
wilshire_query = 'SELECT * FROM pipeline_schema.wilshire_price_index ORDER BY date;'
gdp_query = 'SELECT * FROM pipeline_schema.gdp_value ORDER BY date;'

wilshire_data = fetch_data(wilshire_query)
gdp_data = fetch_data(gdp_query)

# Convert 'date' columns to datetime
wilshire_data['date'] = pd.to_datetime(wilshire_data['date'])
gdp_data['date'] = pd.to_datetime(gdp_data['date'])

# Set 'date' as the index
wilshire_data.set_index('date', inplace=True)
gdp_data.set_index('date', inplace=True)

# Aggregate Wilshire data to quarterly
wilshire_quarterly = wilshire_data.resample('Q').last()

# Ensuring both datasets cover the same time range for comparison
start_date = max(wilshire_quarterly.index.min(), gdp_data.index.min())
end_date = min(wilshire_quarterly.index.max(), gdp_data.index.max())

aligned_wilshire = wilshire_quarterly.loc[start_date:end_date]
aligned_gdp = gdp_data.loc[start_date:end_date]

# Now, 'aligned_wilshire' and 'aligned_gdp
