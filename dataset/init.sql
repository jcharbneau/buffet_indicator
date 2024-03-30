

/* create users table */
CREATE TABLE IF NOT EXISTS users (
    user_id serial PRIMARY KEY,
    username VARCHAR (50) UNIQUE NOT NULL,
    password VARCHAR (50) NOT NULL,
    email VARCHAR (255) UNIQUE NOT NULL,
    created_on TIMESTAMP NOT NULL,
    last_login TIMESTAMP
);


/* create results table(s) */
/*CREATE TABLE IF NOT EXISTS survey_results (
    survey_id serial PRIMARY_KEY,


 */
