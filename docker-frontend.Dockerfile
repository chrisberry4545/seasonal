FROM node:12.14.0-alpine

WORKDIR /usr/app
COPY package*.json yarn.lock lerna.json ./
COPY packages/shared ./packages/shared
RUN yarn workspace @chrisb-dev/shared install --unsafe-perm
COPY packages/frontend/package*.json ./packages/frontend/
RUN yarn install
COPY packages/frontend ./packages/frontend
