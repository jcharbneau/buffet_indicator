-- Grant usage on schema
GRANT USAGE ON SCHEMA webapp_schema TO webapp_user;
GRANT USAGE ON SCHEMA pipeline_schema TO pipeline_user;

-- Grant all privileges on webapp schema and its objects to webapp_user
GRANT ALL PRIVILEGES ON SCHEMA webapp_schema TO webapp_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA webapp_schema TO webapp_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA webapp_schema TO webapp_user;

-- Grant select, insert on pipeline schema and its objects to pipeline_user
GRANT ALL PRIVILEGES ON SCHEMA pipeline_schema TO pipeline_user;
GRANT ALL PRIVILEGES ON ALL TABLES IN SCHEMA pipeline_schema TO pipeline_user;
GRANT ALL PRIVILEGES ON ALL SEQUENCES IN SCHEMA pipeline_schema TO pipeline_user;

-- Adjust the above permissions as needed for your applications

-- Grant usage on the webapp_schema to pipeline user
GRANT USAGE ON SCHEMA webapp_schema TO pipeline_user;

-- Optionally, grant the privilege to manage sequences (for auto-incrementing columns)
GRANT USAGE, SELECT ON ALL SEQUENCES IN SCHEMA webapp_schema TO pipeline_user;

-- Grant select, insert, and update privileges on the market_insights table
GRANT SELECT, INSERT, UPDATE ON webapp_schema.market_insights TO pipeline_user;

-- Grant select, insert, update, and delete privileges on the market_trends table
GRANT SELECT, INSERT, UPDATE, DELETE ON webapp_schema.market_trends TO pipeline_user;

-- If the user needs to create or delete tables within the webapp schema
-- GRANT CREATE, DROP ON SCHEMA webapp TO pipeline_user;
