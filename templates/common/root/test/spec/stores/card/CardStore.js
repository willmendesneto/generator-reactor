'use strict';

// jest.dontMock('../TodoStore');
// jest.dontMock('react/lib/merge');

describe('CardStore', function() {
  var store;

  beforeEach(function() {
    store = require('stores/card/CardStore.js');
  });

  it('should be defined', function() {
    expect(store).toBeDefined();
  });

  it('#getAll', function() {
    store.getAll().then(function(data) {
      expect(typeof data).toBe('object');
      expect(data.length > 1).toBe(true);
    });
  });

  it('#findById', function() {
    store.findById().then(function(data) {
      expect(typeof data).toBe('object');
      expect(Object.keys(data).length).toBe(4);
    });
  });

});
