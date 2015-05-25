'use strict';

describe('UrlHelper', function () {

  var UrlHelper;

  beforeEach(function () {
    UrlHelper = require('helpers/UrlHelper.js');
  });

  it('#generateUrlFriendly', function () {
    var string = 'This is a test';
    expect(UrlHelper.generateUrlFriendly(string)).toBe('this-is-a-test');

    string = 'This is a test with special characters!#$#%$ˆ%$ˆ%$';
    expect(UrlHelper.generateUrlFriendly(string)).toBe('this-is-a-test-with-special-characters');
  });

});
