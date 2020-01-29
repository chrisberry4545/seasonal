const { run } = require('react-snap');

(async () => {
  try {
    await run({
      fixWebpackChunksIssue: 'CRA2',
      headless: true,
      puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  } catch(err) {
    console.log('Failed to run react snap', err)
  }
})();

