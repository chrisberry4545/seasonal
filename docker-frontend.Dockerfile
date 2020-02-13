FROM node:12.14.0-alpine

WORKDIR /usr/app
COPY package*.json yarn.lock lerna.json ./
COPY packages/shared ./packages/shared
COPY packages/shared-frontend-components ./packages/shared-frontend-components
RUN yarn workspace @chrisb-dev/seasonal-shared install --unsafe-perm
COPY packages/frontend/package*.json ./packages/frontend/
RUN yarn install
COPY packages/frontend ./packages/frontend
