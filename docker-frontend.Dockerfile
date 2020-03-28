FROM node:12.14.0-alpine

ENV CHROME_BIN=/usr/bin/chromium-browser \
    PUPPETEER_SKIP_CHROMIUM_DOWNLOAD=true

# Installs latest Chromium package.
RUN set -x \
    && apk update \
    && apk upgrade \
    && apk add --no-cache \
    udev \
    ttf-freefont \
    chromium

WORKDIR /usr/app
COPY .yarnrc.yml package*.json yarn.lock tsconfig.json ./
COPY .yarn ./.yarn
RUN yarn policies set-version berry

COPY packages/healthcheck ./packages/healthcheck
COPY packages/shared-models ./packages/shared-models
COPY packages/shared-frontend-utilities ./packages/shared-frontend-utilities
COPY packages/shared-frontend-components ./packages/shared-frontend-components
COPY packages/shared-frontend-redux ./packages/shared-frontend-redux
COPY packages/frontend/package*.json ./packages/frontend/
RUN yarn install
COPY packages/frontend ./packages/frontend
RUN REACT_APP_BACKEND_URL=http://backend-server:5200/v2 yarn workspace @chrisb-dev/seasonal-frontend build
