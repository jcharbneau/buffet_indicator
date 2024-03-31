FROM postgres:16.2

# ADD postgresql.conf /var/lib/postgresql/data/

# not strictly necessary as we'll be binding over it
#  with compose, however its a good step to have if
#  we need to launch outside of compose
COPY init.sql /docker-entrypoint-initdb.d/

