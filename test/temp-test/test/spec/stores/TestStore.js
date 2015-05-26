'use strict';

describe('TestStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/TestStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });
});
