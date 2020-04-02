const ghPages = require('gh-pages');

ghPages.publish('build', (err) => {
  if (err) {
    console.log('Error deploying to github pages...');
    console.log(err);
    process.exit(1);
  }
  console.log('Succesfully deployed to gh pages');
});
