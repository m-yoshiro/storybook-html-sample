const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.hbs$/,
    loader: 'handlebars-loader',
  });

  return config;
};
