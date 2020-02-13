FROM node:12.14.0-alpine

RUN apk update && apk add python g++ make && rm -rf /var/cache/apk/*
WORKDIR /usr/app
COPY package*.json yarn.lock lerna.json ./
COPY packages/shared ./packages/shared
COPY packages/shared-frontend-components ./packages/shared-frontend-components
RUN yarn workspace @chrisb-dev/seasonal-shared install --unsafe-perm
COPY packages/backend/package*.json ./packages/backend/
RUN yarn install
COPY packages/backend ./packages/backend
