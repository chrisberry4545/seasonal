const copyfiles = require('copyfiles');
const fs = require('fs');

copyfiles(
  ['./src/**/*.sql', './dist'],
  {},
  (err) => {
    if (err) {
      console.error('Failed to copy sql files', err);
      return;
    }
    console.log('Successfully copied sql files');
  }
);
