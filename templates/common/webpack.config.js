var autoprefixer = require('autoprefixer');
var path = require('path');
var merge = require('webpack-merge');
var webpack = require('webpack');
var HtmlwebpackPlugin = require('html-webpack-plugin');
var ExtractTextPlugin = require('extract-text-webpack-plugin');
var getProdConfig = require('./webpack.production');
var getDevConfig = require('./webpack.development');

var NODE_ENV = process.env.NODE_ENV ? 'production' : 'development';

var sassLoaders;

sassLoaders = (NODE_ENV === 'development') ? [
  'css-loader?sourceMap!postcss-loader',
  'sass-loader?sourceMap!postcss-loader'
] : [
  'css-loader!postcss-loader',
  'sass-loader!postcss-loader'
];

var commonConfig = {
  output: {
    path: 'dist'
  },
  module: {
    loaders: [
      {
        test: /\.jsx?$/,
        exclude: /(node_modules|bower_components)/,
        loader: 'babel',
        query: {
          presets: ['es2015', 'react']
        }
      },
      {
        test: /\.scss$/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.sass/,
        loader: ExtractTextPlugin.extract('style-loader', sassLoaders.join('!'))
      },
      {
        test: /\.less/,
        loader: 'style-loader!css-loader!less-loader'
      },
      {
        test: /\.styl/,
        loader: 'style-loader!css-loader!stylus-loader'
      },
      {
        test: /\.css$/,
        loader: 'style-loader!css-loader'
      },
      {
        test: /\.(png|jpg|gif)$/,
        loader: 'url?limit=25000'
      },
      {
        test: /\.json$/,
        loader: 'json'
      }
    ]
  },
  plugins: [
    new HtmlwebpackPlugin({
      title: '<%= scriptAppName %>',
      template: 'src/index.html',
      inject: ['body', 'head']
    }),
    new ExtractTextPlugin('[name].css')
  ],
  resolve: {
    modulesDirectories: [
      'node_modules',
      './src/scripts',
      './src/scripts/components',
      './src/scripts/constants',
      './src/scripts/dispatcher',
      './src/scripts/helpers',
      './src/scripts/stores'
    ]
  },
  postcss: [ autoprefixer({ browsers: ['last 2 versions'] }) ],
  sassLoader: {
    includePaths: [path.resolve(__dirname, './src/styles')]
  }
};

module.exports = merge(commonConfig, (NODE_ENV === 'development' ? getDevConfig() : getProdConfig()));
