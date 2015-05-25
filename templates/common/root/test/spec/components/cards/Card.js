'use strict';

describe('Card', function () {
  var React = require('react/addons'),
      TestUtils = React.addons.TestUtils;
  var Card, component, items, renderedComponent;

  beforeEach(function () {
    Card = require('components/card/Card.js');
    items = MockApp.getCardListItem();
    component = React.createElement(Card);
    renderedComponent = TestUtils.renderIntoDocument(component);
  });

  afterEach(function() {
    React.unmountComponentAtNode(document);
  });

  it('should create a new instance of Card', function () {
    expect(component).toBeDefined();
  });

  it('should render instances of CardListItems in Card component based in state "items" ', function () {
    var CardList = require('components/card/CardList.js');
    var cards = TestUtils.scryRenderedComponentsWithType(renderedComponent, CardList);

    expect(cards.length).toBe(1);

  });


});
