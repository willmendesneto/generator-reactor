'use strict'

var webpack = require('webpack');
var Clean = require('clean-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = () => {
  return {
    entry: {
      app: './src/scripts/components/main.js',
      vendor: [
        'babel-polyfill',
        'node-polyglot',
        'classnames',
        'cookies-js',
        'immutable',
        'qwest',
        'lodash',
        'react',
        'react-dom',
        'react-router',
        'imagesloaded',
        'query-string',
        'mobile-detect',
        'react-addons-css-transition-group',
        'react-script-loader'
      ]
    },
    output: {
      filename: '[name].[chunkhash].js',
      chunkFilename: '[chunkhash].js'
    },
    plugins: [
      new Clean(['dist']),
      new webpack.optimize.CommonsChunkPlugin({
        names: ['vendor', 'manifest']
      }),
      new webpack.DefinePlugin({
        'process.env.NODE_ENV': 'production'
      }),
      new webpack.optimize.DedupePlugin(),
      new webpack.optimize.UglifyJsPlugin({
        compress: {
          warnings: false,
          screw_ie8: true
        },
        sourceMap: false
      }),
      new CopyWebpackPlugin([
        {from: './src/images', to: 'src/images'}
      ])
    ]
  };
};
