const { run } = require('react-snap');

(async () => {
  try {
    await run({
      ...(
        process.env.CHROME_BIN
          ? { puppeteerExecutablePath: process.env.CHROME_BIN }
          : {}
      ),
      fixWebpackChunksIssue: 'CRA2',
      headless: true,
      puppeteerArgs: ['--no-sandbox', '--disable-setuid-sandbox']
    });
  } catch(err) {
    console.log('Failed to run react snap', err)
  }
})();

