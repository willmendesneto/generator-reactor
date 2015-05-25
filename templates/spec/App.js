'use strict';

describe('<%= classedName %>', function () {
  var React = require('react/addons');
  var TestUtils = React.addons.TestUtils;
  var <%= scriptAppName %>, component, renderedComponent;

  beforeEach(function () {
    var container = document.createElement('div');
    container.id = 'content';
    document.body.appendChild(container);

    <%= scriptAppName %> = require('components/<%= scriptAppName %>.js');
    component = React.createElement(<%= scriptAppName %>);
    renderedComponent = TestUtils.renderIntoDocument(component);
  });

  afterEach(function() {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of <%= scriptAppName %>', function () {
    expect(component).toBeDefined();
  });
});
