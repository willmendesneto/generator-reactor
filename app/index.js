'use strict';
var util = require('util');
var path = require('path');
var yeoman = require('yeoman-generator');
var generalUtils = require('../util.js');

var ReactorGenerator = module.exports = function ReactorGenerator(args, options, config) {
  yeoman.generators.Base.apply(this, arguments);
  this.option('es6');

  this.argument('appname', { type: String, required: false });
  this.appname = this.appname || path.basename(process.cwd());
  this.appname = this._.camelize(this._.slugify(this._.humanize(this.appname)));
  this.scriptAppName = this._.capitalize(this.appname) + generalUtils.appName(this);

  this.config.set('app-name', this.appname);


  if (typeof this.options.appPath === 'undefined') {
    this.options.appPath = this.options.appPath || 'src';
  }

  this.appPath = this.options.appPath;

  args = [this.scriptAppName];

  this.composeWith('reactor:common', {
    args: args
  });

  this.composeWith('reactor:main', {
    args: args
  });

  this.on('end', function () {
    this.installDependencies({ skipInstall: options['skip-install'], bower: false });
  });


  this.pkg = JSON.parse(this.readFileAsString(path.join(__dirname, '../package.json')));

  this.config.save();
};

util.inherits(ReactorGenerator, yeoman.generators.Base);

ReactorGenerator.prototype.welcome = function welcome() {
  // welcome message
  if (!this.options['skip-welcome-message']) {
    console.log(this.yeoman);
    console.log(
      'Out of the box I include Webpack and some default React components.\n'
    );
  }
};

ReactorGenerator.prototype.askForReactRouter = function () {
  var done = this.async();
  this.prompt({
    type    : 'confirm',
    name    : 'reactRouter',
    message : 'Would you like to include react-router(using react-router-component)?',
    default : true
  }, function (props) {
    this.env.options.reactRouter = props.reactRouter;
    done();
  }.bind(this));
};

ReactorGenerator.prototype.askForArchitecture  = function() {
  var done = this.async();
  this.prompt({
    type    : 'list',
    name    : 'architecture',
    message : 'Would you like to use one of those architectures?',
    choices: [
      {name:'Flux', value:'flux'},
      {name:'ReFlux', value:'reflux'},
      {name:'No need for that, thanks', value:false}
    ],
    default : 'flux'
  }, function(props) {
    this.env.options.architecture = props.architecture;
    this.config.set('architecture', props.architecture);
    done();
  }.bind(this));
};

ReactorGenerator.prototype.askForStylesLanguage = function () {
  var done = this.async();
  this.prompt({
    type    : 'list',
    name    : 'stylesLanguage',
    message : 'Which styles language you want to use?',
    choices: [
        {name: 'CSS', value: 'css'},
        {name: 'SASS', value: 'sass'},
        {name: 'SCSS', value: 'scss'},
        {name: 'LESS', value: 'less'},
        {name: 'Stylus', value: 'stylus'}
    ],
    default : 'css'
  }, function (props) {
    this.env.options.stylesLanguage = props.stylesLanguage;
    this.config.set('styles-language', props.stylesLanguage);
    this.config.set('stylesLanguage', props.stylesLanguage);
    done();
  }.bind(this));
};

ReactorGenerator.prototype.readIndex = function readIndex() {
  this.indexFile = this.engine(this.read('../../templates/common/index.html'), this);
};

ReactorGenerator.prototype.createIndexHtml = function createIndexHtml() {
  this.indexFile = this.indexFile.replace(/&apos;/g, "'");
  this.write(path.join(this.appPath, 'index.html'), this.indexFile);
};

ReactorGenerator.prototype.packageFiles = function () {
  this.es6 = this.options.es6;
  this.reactRouter = this.env.options.reactRouter;
  this.architecture = this.env.options.architecture;
  this.stylesLanguage = this.env.options.stylesLanguage;
  this.template('../../templates/common/_package.json', 'package.json');
  this.template('../../templates/common/_Gruntfile.js', 'Gruntfile.js');
  this.copy('../../templates/common/gitignore', '.gitignore');
};

ReactorGenerator.prototype.imageFiles = function () {
  this.sourceRoot(path.join(__dirname, 'templates'));
  this.directory('images', 'src/images', true);
};

ReactorGenerator.prototype.styleFiles = function () {
  this.sourceRoot(path.join(__dirname, 'templates'));
  this.directory('styles', 'src/styles', true);
};

ReactorGenerator.prototype.karmaFiles = function () {
  this.copy('../../templates/common/karma.conf.js', 'karma.conf.js');
};
