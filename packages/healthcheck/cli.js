#!/usr/bin/env node

const fetch = require('node-fetch');

/**
 * Used to ensure a service at another URL has started.
 */

const args = process.argv.slice(2);
const appUrl = args[0];

if (!appUrl) {
  throw new Error('Please provide a URL as an argument');
}

const sleep = (ms) => new Promise(
  (resolve) => setTimeout(() => resolve(), ms)
);

const healthcheckApp = () =>
  fetch(appUrl)
    .then(() => true)
    .catch(() => false);

(async () => {
  const maxRetries = 20;
  const interval = 10000;
  console.log();
  for (var i = 0; i < maxRetries - 1; i++) {
    if (await healthcheckApp()) {
      console.log(`${appUrl} has started`);
      process.exit(0);
    }
    console.log(`${appUrl} has not started. Retrying...`);
    await sleep(interval);
  }
  console.log(`${appUrl} has not started after ${maxRetries} attempts`);
  process.exit(1);
})();
