'use strict';
var util = require('util');
var ScriptBase = require('../script-base.js');

var ClassGenerator = module.exports = function ClassGenerator(args, options, config) {
  ScriptBase.apply(this, arguments);
};

util.inherits(ClassGenerator, ScriptBase);

ClassGenerator.prototype.createClassFile = function createClassFile() {
  this.option('es6');
  this.option('rich');
  this.option('style');

  this.es6 = true;
  this.rich = this.options.rich;
  this.style = typeof this.options.style !== 'undefined';

  var createWithStylesheet = this.style;

  this.generateClassTestAndStyle(
    'Class',
    'spec/Component',
    'scripts/components',
    (createWithStylesheet ? 'styles/Component' : false),
    true
  );
};
