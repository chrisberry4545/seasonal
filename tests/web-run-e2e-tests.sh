#! /bin/bash

DOCKER_COMPOSE_FILES="-f ./docker-compose.yml"
if [[ -z "$IS_CI" ]]; then
  DOCKER_COMPOSE_FILES="${DOCKER_COMPOSE_FILES} -f ./docker-compose.dev.yml"
fi

eval "docker-compose ${DOCKER_COMPOSE_FILES} down"
echo "Starting tests..."

eval "docker-compose ${DOCKER_COMPOSE_FILES} run --service-ports --rm seasonal-e2e-web"
status=$?

echo "Writing logs..."
mkdir -p /logs
eval "docker-compose ${DOCKER_COMPOSE_FILES} logs --no-color > /logs/compose.log"
cat  /logs/compose.logs
echo "Logs stored"

eval "docker-compose ${DOCKER_COMPOSE_FILES} down"

if [ "$status" = "0" ]; then
  echo "Tests passed"
  exit 0;
fi

echo "Tests Failed"
exit 1;
