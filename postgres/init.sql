
/* create our users */
CREATE USER webapp_user WITH PASSWORD 'webapp_password';
CREATE USER pipeline_user WITH PASSWORD 'pipeline_password';

/* create our schemas */
CREATE SCHEMA IF NOT EXISTS webapp_schema AUTHORIZATION webapp_user;
CREATE SCHEMA IF NOT EXISTS pipeline_schema AUTHORIZATION pipeline_user;

/* create a pipeline table to track the overall stock market value */
CREATE TABLE IF NOT EXISTS pipeline_schema.wilshire_price_index (
      id SERIAL PRIMARY KEY,
      date DATE, -- Assuming the date column only needs to store dates without time component
      will5000pr NUMERIC(15,2) NULL -- Aligning column name with CSV header and allowing NULL values for gaps
);

/* load our local copy of the data */
COPY pipeline_schema.wilshire_price_index(date, will5000pr)
    FROM '/docker-entrypoint-initdb.d/data/WILL5000PR.csv'
    WITH (FORMAT csv, HEADER true, DELIMITER ',', NULL '.');

/* create a pipeline table to track the gdp value over time */
CREATE TABLE IF NOT EXISTS pipeline_schema.gdp_value (
     id SERIAL PRIMARY KEY,
     date DATE, -- Changed from TIMESTAMP to DATE for storing just the date part
     gdp NUMERIC(15,3) -- Renamed from value to gdp to match CSV header
);

/* load our most recent static copy of the data */
COPY pipeline_schema.gdp_value(date, gdp)
    FROM '/docker-entrypoint-initdb.d/data/GDP.csv'
    WITH (FORMAT csv, HEADER true, DELIMITER ',');


-- Define the market_insights table
CREATE TABLE IF NOT EXISTS webapp_schema.market_insights (
     id SERIAL PRIMARY KEY,
     date DATE NOT NULL,
     latest_buffett_indicator NUMERIC(10,2),
     latest_wilshire_value NUMERIC(20,2),
     latest_gdp_value NUMERIC(20,2),
     UNIQUE(date)
);

CREATE TABLE IF NOT EXISTS webapp_schema.market_trends (
    trend_id SERIAL PRIMARY KEY,
    date DATE NOT NULL UNIQUE,
    buffett_indicator NUMERIC(10,2),
    moving_average_6m NUMERIC(10, 2),
    moving_average_12m NUMERIC(10, 2),
    volatility_12m NUMERIC(10, 2),
    FOREIGN KEY (date) REFERENCES webapp_schema.market_insights(date)
);

CREATE INDEX IF NOT EXISTS idx_market_trends_date ON webapp_schema.market_trends(date);

