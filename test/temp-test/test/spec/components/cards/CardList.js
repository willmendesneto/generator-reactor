'use strict';

describe('CardList', function () {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils;
  var CardStore = require('stores/card/CardStore.js');
  var CardList, component, renderedComponent, items;

  beforeEach(function () {
    CardList = require('components/card/CardList.js');
    items = MockApp.getCardListItem();
    component = React.createElement(CardList, {items: items});
    renderedComponent = TestUtils.renderIntoDocument(component);
  });

  afterEach(function() {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of CardList with all props', function () {
    expect(component).toBeDefined();
    expect(component.props.items.length).toBe(items.length);

    expect(component.props.items[0].id).toBe(items[0].id);
    expect(component.props.items[0].name).toBe(items[0].name);
    expect(component.props.items[0].website).toBe(items[0].website);
    expect(component.props.items[0].description).toBe(items[0].description);
    expect(component.props.items[0].image).toBe(items[0].image);
  });


  it('should render instances of CardListItems based in props "items" ', function () {
    var CardListItem = require('components/card/CardListItem.js');
    var cards = TestUtils.scryRenderedComponentsWithType(renderedComponent, CardListItem);

    expect(cards.length).toBe(component.props.items.length);
  });

});
