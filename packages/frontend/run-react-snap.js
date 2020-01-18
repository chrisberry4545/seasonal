const { run } = require('react-snap');

(async () => {
  await run({
    headless: true,
    puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox']
  });
})();

