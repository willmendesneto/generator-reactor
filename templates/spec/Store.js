'use strict';

import <%= classedName %> from 'stores/<%= classedFileName %>';

describe('<%= classedName %>', () => {
  it('should be defined', () => {
    expect(classedName).toBeDefined();
  });
});
