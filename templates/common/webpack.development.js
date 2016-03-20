'use strict'

module.exports = () => {
  return {
    entry: './src/scripts/components/main.js',
    devServer: {
      inline: true,
      contentBase: '.',
      port: 4567
    },
    devtool: 'eval-source-map'
  }
};
