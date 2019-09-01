const path = require('path');

module.exports = async ({ config, mode }) => {
  config.module.rules.push({
    test: /\.hbs$/,
    loader: 'handlebars-loader',
  });

  config.module.rules.push({
    test: /\.scss$/,
    use: [
      'style-loader',
      'css-loader',
      {
        loader: 'sass-loader',
        options: {
          implementation: require('sass'),
        }
      }],
    include: path.resolve(__dirname, '../')
  });

  return config;
};
