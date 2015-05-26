'use strict';

describe('CardListItem', function () {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils;
  var CardListItem, component, item, renderedComponent;

  beforeEach(function () {
    CardListItem = require('components/card/CardListItem.js');
    item = MockApp.getCardItem();
    component = React.createElement(CardListItem, item);
    renderedComponent = TestUtils.renderIntoDocument(component);
  });

  afterEach(function() {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of CardListItem with all props', function () {
    expect(component).toBeDefined();

    expect(Object.keys(component.props).length).toBe(5);
    expect(component.props.id).toBe(item.id);
    expect(component.props.name).toBe(item.name);
    expect(component.props.website).toBe(item.website);
    expect(component.props.description).toBe(item.description);
    expect(component.props.image).toBe(item.image);
  });

  it('should render props info in component', function() {
    var image = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'card-image');

    expect(image.props.src).toBe(component.props.image);
    expect(image.props.alt).toBe(component.props.name);
    expect(image.props.title).toBe(component.props.name);

    var title = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'title');
    expect(title.getDOMNode().textContent).toBe(component.props.name);

    var desc = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'desc');
    expect(desc.getDOMNode().textContent).toBe(component.props.description);
  });

});
