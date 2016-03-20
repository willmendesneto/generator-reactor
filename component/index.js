'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');

var ComponentGenerator = module.exports = function ComponentGenerator(args, options, config) {
  ScriptBase.apply(this, arguments);
};

util.inherits(ComponentGenerator, ScriptBase);

ComponentGenerator.prototype.createComponentFile = function createComponentFile() {
  this.option('es6');
  this.option('rich');
  this.option('style');

  this.es6 = true;
  this.rich = this.options.rich;
  this.style = typeof this.options.style !== 'undefined';

  var createWithStylesheet = this.style;

  this.generateComponentTestAndStyle(
    'Component',
    'spec/Component',
    'scripts/components',
    (createWithStylesheet ? 'styles/Component' : false),
    true
  );
};
