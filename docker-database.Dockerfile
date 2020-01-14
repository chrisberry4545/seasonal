FROM postgres:11.6

COPY packages/database/docker-entrypoint-initdb.d/ ./docker-entrypoint-initdb.d
CMD ls docker-entrypoint-initdb.d
