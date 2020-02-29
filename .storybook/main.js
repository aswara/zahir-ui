const path = require('path');
module.exports = {
  stories: ['./src/*.stories.mdx', './src/*.stories.[tj]s'],
  addons: [
    '@storybook/addon-docs',
    'storybook-addon-material-ui/register'
  ],
  webpackFinal: async (config, { configType }) => {
    // `configType` has a value of 'DEVELOPMENT' or 'PRODUCTION'
    // You can change the configuration based on that.
    // 'PRODUCTION' is used when building the static version of storybook.

    // Make whatever fine-grained changes you need
    config.resolve.alias = {
      ...config.resolve.alias,
      'zahir-ui': path.resolve(__dirname, '../src'),
    }
    // Return the altered config
    return config;
  },
};