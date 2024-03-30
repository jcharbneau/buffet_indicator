

/* create our schema */


/* create a table to track the overall stock market value */
create table if not exists stock_market_value (
        id serial PRIMARY KEY,
        source VARCHAR (50),
        market_value NUMERIC(15,2),
        last_updated TIMESTAMP,
        created_on TIMESTAMP NOT NULL
);

/* create our schema to track the gdp value over time */
create table if not exists gdp_value (
    id serial PRIMARY KEY,
    source VARCHAR (50),
    gdp_value NUMERIC(15,2),
    last_updated TIMESTAMP,
    created_on TIMESTAMP NOT NULL
);

/* load our most recent pull */



