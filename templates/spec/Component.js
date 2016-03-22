'use strict';

import <%= classedName %> from 'components/<%= classedFileName %>';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('<%= classedName %>',  () => {
  let renderedComponent;

  beforeEach(() => {
    let node = document.createElement('div');
    renderedComponent = ReactDOM.render(<<%= classedName %> />, node);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document);
  });

  it('should create a new instance of <%= classedName %>', function () {
    expect(renderedComponent).toBeDefined();
  });

});
