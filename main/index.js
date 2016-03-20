'use strict';

var util = require('util');
var ScriptBase = require('../script-base.js');

var MainGenerator = module.exports = function MainGenerator(args, options, config) {
  ScriptBase.apply(this, arguments);
};

util.inherits(MainGenerator, ScriptBase);

MainGenerator.prototype.createDispatcher = function createDispatcher() {
  if(this.env.options.architecture === 'flux') {
    this.appTemplate('Dispatcher', 'scripts/dispatcher/' + this.scriptAppName + 'Dispatcher');
  }
};
