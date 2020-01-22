FROM node:12.14.0-alpine

WORKDIR /usr/app
COPY package*.json yarn.lock lerna.json ./
COPY packages/shared ./packages/shared
RUN yarn workspace @chrisb-dev/seasonal-shared install --unsafe-perm
COPY packages/backend/package*.json ./packages/backend/
RUN yarn install
COPY packages/backend ./packages/backend
