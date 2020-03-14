const path = require('path');

const extraNodeModules = new Proxy(
  {
    '@chrisb-dev/seasonal-shared-models': path.resolve(__dirname, '../shared'),
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
    path.resolve(__dirname, '../shared')
  ],
};
