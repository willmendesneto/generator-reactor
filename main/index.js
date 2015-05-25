'use strict';

var util = require('util');
var ScriptBase = require('../script-base.js');

var MainGenerator = module.exports = function MainGenerator(args, options, config) {
  ScriptBase.apply(this, arguments);
};

util.inherits(MainGenerator, ScriptBase);

MainGenerator.prototype.createMainFile = function createMainFile() {
  this.reactRouter = this.env.options.reactRouter;
  if(this.env.options.reactRouter) {
    this.appTemplate('App', 'scripts/components/main');
  }
};

MainGenerator.prototype.createDispatcher = function createDispatcher() {
  if(this.env.options.architecture=='flux') {
    this.appTemplate('Dispatcher', 'dispatcher/' + this.scriptAppName + 'Dispatcher');
  }
};
