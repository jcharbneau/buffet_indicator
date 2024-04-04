FROM postgres:14

# copy default config
# ADD postgresql.conf /var/lib/postgresql/data/postgresql.conf

# Set environment variables
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=mysecretpassword

# Create a directory to stash our csv files for loading
RUN mkdir -p /docker-entrypoint-initdb.d/data

# Copy our CSV files
COPY GDP.csv WILL5000PR.csv /docker-entrypoint-initdb.d/data/

# Copy initialization scripts
COPY init.sql /docker-entrypoint-initdb.d/10-init.sql
COPY setup-permissions.sql /docker-entrypoint-initdb.d/20-setup-permissions.sql

# No additional steps required here for user and password setup
# PostgreSQL Docker image handles POSTGRES_USER and POSTGRES_PASSWORD env variables automatically