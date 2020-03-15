FROM node:12.14.0-alpine

RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*
WORKDIR /usr/app
COPY package*.json yarn.lock lerna.json ./
COPY packages/shared-models ./packages/shared-models
RUN yarn workspace @chrisb-dev/seasonal-shared-models install --unsafe-perm
COPY packages/backend/package*.json ./packages/backend/
RUN yarn install
COPY packages/backend ./packages/backend
