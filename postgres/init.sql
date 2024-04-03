
/* create our users */
CREATE USER webapp_user WITH PASSWORD 'webapp_password';
CREATE USER pipeline_user WITH PASSWORD 'pipeline_password';

/* create our schema */
CREATE SCHEMA webapp_schema AUTHORIZATION webapp_user;
CREATE SCHEMA pipeline_schema AUTHORIZATION pipeline_user;


/* create a pipeline table to track the overall stock market value */
create table if not exists pipeline_schema.stock_market_value (
        id serial PRIMARY KEY,
        date TIMESTAMP,
        value NUMERIC(15,2)
);

/* create a pipeline table to track the gdp value over time */
create table if not exists pipeline_schema.gdp_value (
    id serial PRIMARY KEY,
    date TIMESTAMP,
    value NUMERIC(15,3)
);

/* load our most recent static copy of the data */



