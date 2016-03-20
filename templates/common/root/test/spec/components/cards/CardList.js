'use strict';

import CardListItem from 'components/card/CardListItem';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';
import CardList from 'components/card/CardList';

describe('CardList', () => {
  let renderedComponent, items;

  beforeEach(() => {
    items = MockApp.getCardListItem();

    let node = document.createElement('div');
    renderedComponent = ReactDOM.render(<CardList items={items}/>, node);
  });

  afterEach(function() {
    ReactDOM.unmountComponentAtNode(document);
  });

  it('should create a new instance of CardList with all props', () => {
    expect(renderedComponent.props.items.length).toBe(items.length);

    items.forEach((item, index) => {
      expect(renderedComponent.props.items[index].id).toBe(item.id);
      expect(renderedComponent.props.items[index].name).toBe(item.name);
      expect(renderedComponent.props.items[index].website).toBe(item.website);
      expect(renderedComponent.props.items[index].description).toBe(item.description);
      expect(renderedComponent.props.items[index].image).toBe(item.image);
    });
  });

  it('should render instances of CardListItems based in props "items" ', () => {
    const cards = TestUtils.scryRenderedComponentsWithType(renderedComponent, CardListItem);
    expect(cards.length).toBe(renderedComponent.props.items.length);
    expect(cards.length).toBe(items.length);
  });

});
