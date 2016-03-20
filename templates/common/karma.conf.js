const path = require('path');
const argv = require('minimist')(process.argv);

const watch = argv.watch || argv.w || false;

module.exports = (config) => {
  config.set({
    browsers: [ 'PhantomJS' ],
    // karma only needs to know about the test bundle
    files: [
      'test/{helpers,mocks}/**/*.js',
      'test/spec/**/*.{js,jsx}'
    ],
    frameworks: [ 'jasmine', 'jasmine-matchers' ],
    plugins: [
      'karma-phantomjs-launcher',
      'karma-jasmine',
      'karma-jasmine-matchers',
      'karma-sourcemap-loader',
      'karma-webpack'
    ],
    // run the bundle through the webpack and sourcemap plugins
    preprocessors: {
      'test/spec/**/*.{js,jsx}': [ 'webpack', 'sourcemap' ],
      'src/scripts/**/*.js': ['coverage']
    },
    reporters: ['progress', 'coverage'],
    autoWatch: watch,
    singleRun: !watch,
    // singleRun: true,
    // webpack config object
    webpack: {
      // devtool: 'inline-source-map',
      cache: true,
      module: {
        loaders: [
          {
            exclude: /node_modules/,
            loader: 'babel-loader',
            test: /\.jsx?$/
          }, {
            test: /\.scss/,
            loader: 'style-loader!css-loader!sass-loader?outputStyle=expanded'
          }, {
            test: /\.css$/,
            loader: 'style-loader!css-loader'
          },
        ],
      },
      resolve: {
        alias: {
          'styles': path.join(process.cwd(), './src/styles/'),
          'helpers': path.join(process.cwd(), './src/scripts/helpers/'),
          'components': path.join(process.cwd(), './src/scripts/components/'),
          'stores': path.join(process.cwd(), './src/scripts/stores/'),
          'actions': path.join(process.cwd(), './src/scripts/actions/')
        }
      }
    },
    webpackMiddleware: {
      noInfo: true
    },
    //  coverage reporter configuration
    coverageReporter: {
      dir:'coverage/',
      reporters: [
        { type: 'html', subdir: 'report-html' },
        { type: 'lcov', subdir: 'report-lcov' }
      ]
    },
  });
};
