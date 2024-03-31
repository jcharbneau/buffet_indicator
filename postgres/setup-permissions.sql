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
