'use strict';

describe('CardItem', function () {

  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils;
  var CardItem, component, item, renderedComponent;

  beforeEach(function () {
    CardItem = require('components/card/CardItem.js');
    item = MockApp.getCardItem();
    component = React.createElement(CardItem, {cardId: item.id} );

    renderedComponent = TestUtils.renderIntoDocument(component);
    renderedComponent.setState({
      item: item
    });
  });

  afterEach(function() {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of CardItem with all state', function () {
    expect(Object.keys(renderedComponent.state.item).length).toBe(5);
    expect(renderedComponent.state.item.id).toBe(item.id);
    expect(renderedComponent.state.item.name).toBe(item.name);
    expect(renderedComponent.state.item.website).toBe(item.website);
    expect(renderedComponent.state.item.description).toBe(item.description);
    expect(renderedComponent.state.item.image).toBe(item.image);
  });

  it('should render state info in component', function() {
    var image = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'card-item-image');

    expect(image.props.src).toBe(renderedComponent.state.item.image);
    expect(image.props.alt).toBe(renderedComponent.state.item.name);
    expect(image.props.title).toBe(renderedComponent.state.item.name);

    var title = TestUtils.findRenderedDOMComponentWithTag(renderedComponent, 'h2');
    expect(title.getDOMNode().textContent).toBe(renderedComponent.state.item.name);

    var desc = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'desc');
    expect(desc.getDOMNode().textContent).toBe(renderedComponent.state.item.description);
  });

});
