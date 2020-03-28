const copyfiles = require('copyfiles');
const fs = require('fs');

copyfiles(
  ['.env*.yml', './dist'],
  {},
  (err) => {
    if (err) {
      console.error('Failed to copy', err);
      return;
    }
    if (process.env.IS_CI) {
      fs.rename(
        './dist/.env-ci.yml',
        './dist/.env.yml',
        (err) => {
          if (err) {
            console.error('Failed to rename', err);
          } else {
            console.log('Succesfully copied env file');
          }
        }
      )
    }
  }
);
