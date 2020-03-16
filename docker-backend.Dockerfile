FROM node:12.14.0-alpine

RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*
WORKDIR /usr/app

COPY .yarnrc.yml package*.json yarn.lock lerna.json ./
COPY .yarn ./.yarn
RUN yarn policies set-version berry

COPY packages/shared-models ./packages/shared-models
RUN yarn workspace @chrisb-dev/seasonal-shared-models install

COPY packages/backend/package*.json ./packages/backend/
RUN yarn install
COPY packages/backend ./packages/backend
