'use strict';

import <%= classedName %> from 'components/<%= classedFileName %>';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('<%= classedName %>', () => {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var <%= scriptAppName %>, component, renderedComponent;

  beforeEach(() => {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);
    renderedComponent = ReactDOM.render(<<%= classedName %> />, container);
  });

  afterEach(() => {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of <%= scriptAppName %>', () => {
    expect(renderedComponent).toBeDefined();
  });
});
