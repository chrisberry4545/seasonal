const { run } = require('react-snap');

(async () => {
  await run({
    puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox']
  });
})();

