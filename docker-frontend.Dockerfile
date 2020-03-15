FROM node:12.14.0-alpine

WORKDIR /usr/app
COPY package*.json yarn.lock lerna.json ./

COPY packages/shared-models ./packages/shared-models
RUN yarn workspace @chrisb-dev/seasonal-shared-models install --unsafe-perm

COPY packages/shared-frontend-utilities ./packages/shared-frontend-utilities
RUN yarn workspace @chrisb-dev/seasonal-shared-frontend-utilities install --unsafe-perm

COPY packages/shared-frontend-components ./packages/shared-frontend-components
RUN yarn workspace @chrisb-dev/seasonal-shared-frontend-utilities install --unsafe-perm

COPY packages/shared-frontend-redux ./packages/shared-frontend-redux
RUN yarn workspace @chrisb-dev/seasonal-shared-frontend-redux install --unsafe-perm

COPY packages/frontend/package*.json ./packages/frontend/
RUN yarn install
COPY packages/frontend ./packages/frontend
