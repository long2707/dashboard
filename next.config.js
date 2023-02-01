const path = require("path");

module.exports = {
  reactStrictMode: true,
  webpack(config) {
    config.resolve.alias['@material-ui/core'] =
      require.resolve('@mui/material');
    return config;
  },
};

