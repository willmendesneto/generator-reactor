'use strict';
import UrlHelper from 'helpers/UrlHelper.js';

describe('UrlHelper', () => {

  it('#generateUrlFriendly', () => {
    let string = 'This is a test';
    expect(UrlHelper.generateUrlFriendly(string)).toBe('this-is-a-test');

    string = 'This is a test with special characters!#$#%$ˆ%$ˆ%$';
    expect(UrlHelper.generateUrlFriendly(string)).toBe('this-is-a-test-with-special-characters');
  });

});
