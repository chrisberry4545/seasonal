const path = require('path');

const extraNodeModules = new Proxy(
  {
    '@chrisb-dev/seasonal-shared-models': path.resolve(__dirname, '../shared-models'),
    '@chrisb-dev/seasonal-shared-frontend-utilities': path.resolve(__dirname, '../shared-frontend-utilities'),
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
    path.resolve(__dirname, '../shared-frontend-utilities')
  ],
};
