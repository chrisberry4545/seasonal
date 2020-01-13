FROM node:10.15.0-alpine

WORKDIR /usr/app
COPY package*.json ./
RUN npm install
COPY packages/shared ./packages/shared
RUN cd /usr/app/packages/shared && npm i
COPY packages/backend/package*.json ./packages/backend/
RUN cd /usr/app/packages/backend && npm i
COPY packages/frontend/package*.json ./packages/frontend/
RUN cd /usr/app/packages/frontend && npm i
COPY lerna.json ./
RUN npm run bootstrap
