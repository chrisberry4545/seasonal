#! /bin/bash

DOCKER_COMPOSE_FILES="-f ./docker-compose.yml"
UPDATE_SNAPSHOT=""
if [[ -z "$IS_CI" ]]; then
  DOCKER_COMPOSE_FILES="${DOCKER_COMPOSE_FILES} -f ./docker-compose.dev.yml"
  UPDATE_SNAPSHOT="--updateSnapshot"
fi

eval "docker-compose ${DOCKER_COMPOSE_FILES} down"
echo "Starting tests..."

eval "docker-compose ${DOCKER_COMPOSE_FILES} run --rm seasonal-backend yarn backend:test:integration ${UPDATE_SNAPSHOT}"
status=$?

eval "docker-compose ${DOCKER_COMPOSE_FILES} down"

if [ "$status" = "0" ]; then
  echo "Tests passed"
  exit 0;
fi

echo "Tests Failed"
exit 1;
