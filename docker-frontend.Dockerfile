FROM node:10.15.0-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY packages/shared ./packages/shared
RUN cd /usr/app/packages/shared && npm i --unsafe-perm
COPY packages/frontend/package*.json ./packages/frontend/
RUN cd /usr/app/packages/frontend && npm i
COPY lerna.json ./
RUN npm run bootstrap
COPY packages/frontend ./packages/frontend
