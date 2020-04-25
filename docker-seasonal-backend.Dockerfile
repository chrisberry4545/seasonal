FROM node:12.14.0-alpine

RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*
WORKDIR /usr/app

COPY .yarnrc.yml package*.json yarn.lock tsconfig.json ./
COPY .yarn ./.yarn
RUN yarn policies set-version berry

COPY packages/shared-models ./packages/shared-models
COPY packages/backend ./packages/backend
RUN yarn install
