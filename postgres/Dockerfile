FROM postgres:latest

# ADD postgresql.conf /var/lib/postgresql/data/

# Set environment variables if needed (for example, to set the default superuser password)
ENV POSTGRES_PASSWORD=mysecretpassword

# not strictly necessary as we'll be binding over it
#  with compose, however its a good step to have if
#  we need to launch outside of compose
COPY init.sql /docker-entrypoint-initdb.d/10-init.sql
COPY setup-permissions.sql /docker-entrypoint-initdb.d/20-setup-permissions.sql
