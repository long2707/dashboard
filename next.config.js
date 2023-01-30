const path = require("path");

module.exports = {
  reactStrictMode: true,
  basePath: '/dashboard',
  assetPrefix: "/dashboard" || '',
  async redirects() {
    return [
      {
        source: '/',
        destination: '/dashboard',
        basePath: false,
        permanent: false,
      }
    ]
  },
  webpack(config) {
    config.resolve.alias['@material-ui/core'] =
      require.resolve('@mui/material');
    return config;
  },
};

