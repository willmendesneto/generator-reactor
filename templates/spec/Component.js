'use strict';

describe('<%= classedName %>', function () {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var <%= classedName %>, component, renderedComponent;

  beforeEach(function () {
    <%= classedName %> = require('components/<%= classedFileName %>.js');
    component = React.createElement(<%= classedName %>);
    renderedComponent = TestUtils.renderIntoDocument(component);
  });

  afterEach(function() {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of <%= classedName %>', function () {
    expect(component).toBeDefined();
  });
});
