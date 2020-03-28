#! /bin/bash

DOCKER_COMPOSE_FILES="-f ./docker-compose.test.yml"
if [[ -z "$IS_CI" ]]; then
  DOCKER_COMPOSE_FILES="${DOCKER_COMPOSE_FILES} -f ./docker-compose.test.dev.yml"
fi

eval "docker-compose ${DOCKER_COMPOSE_FILES} down"
echo "Starting tests..."

eval "docker-compose ${DOCKER_COMPOSE_FILES} run --service-ports --rm frontend-e2e"
status=$?

eval "docker-compose ${DOCKER_COMPOSE_FILES} down"

if [ "$status" = "0" ]; then
  echo "Tests passed"
  exit 0;
fi

echo "Tests Failed"
exit 1;
