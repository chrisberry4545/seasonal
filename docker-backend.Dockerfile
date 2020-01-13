FROM node:10.15.0-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY packages/shared ./packages/shared
RUN cd /usr/app/packages/shared && npm i --unsafe-perm
COPY packages/backend/package*.json ./packages/backend/
RUN cd /usr/app/packages/backend && npm i
COPY lerna.json ./
RUN npm run bootstrap
COPY packages/backend ./packages/backend
