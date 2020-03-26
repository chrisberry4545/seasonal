FROM node:12.14.0-alpine

WORKDIR /usr/app
COPY .yarnrc.yml package*.json yarn.lock tsconfig.json ./
COPY .yarn ./.yarn
RUN yarn policies set-version berry

COPY packages/shared-models ./packages/shared-models
COPY packages/shared-frontend-utilities ./packages/shared-frontend-utilities
COPY packages/shared-frontend-components ./packages/shared-frontend-components
COPY packages/shared-frontend-redux ./packages/shared-frontend-redux
COPY packages/frontend/package*.json ./packages/frontend/
RUN yarn install
COPY packages/frontend ./packages/frontend
