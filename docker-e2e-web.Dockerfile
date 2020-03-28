FROM cypress/browsers:node12.4.0-chrome76
WORKDIR /usr/app

COPY .yarnrc.yml package*.json yarn.lock ./
COPY .yarn ./.yarn
RUN yarn policies set-version berry

COPY packages/healthcheck ./packages/healthcheck
COPY packages/e2e-web ./packages/e2e-web
RUN yarn install
