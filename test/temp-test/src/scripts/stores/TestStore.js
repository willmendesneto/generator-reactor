'use strict';

var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var TempTestAppDispatcher = require('../dispatcher/TempTestAppDispatcher');

var TestStore = assign({}, EventEmitter.prototype, {

});

TestStore.dispatchToken = TempTestAppDispatcher.register(function(action) {

  switch(action.type) {
    default:
  }

});

module.exports = TestStore; 
