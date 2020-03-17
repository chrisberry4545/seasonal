const path = require('path');

const extraNodeModules = new Proxy(
  {
    '@chrisb-dev/seasonal-shared-models': path.resolve(__dirname, '../shared-models'),
    '@chrisb-dev/seasonal-shared-frontend-utilities': path.resolve(__dirname, '../shared-frontend-utilities'),
    '@chrisb-dev/seasonal-shared-frontend-redux': path.resolve(__dirname, '../shared-frontend-redux')
  },
  {
    get: (target, name) => {
      if (target.hasOwnProperty(name)) {
        return target[name];
      }
      return path.join(process.cwd(), `node_modules/${name}`);
    },
  },
);

module.exports = {
  resolver: {
    extraNodeModules
  },
  watchFolders: [
    path.resolve(__dirname, '../shared-models'),
    path.resolve(__dirname, '../shared-frontend-utilities'),
    path.resolve(__dirname, '../shared-frontend-redux')
  ],
};
