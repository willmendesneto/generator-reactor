'use strict';

import Card from 'components/card/Card';
import CardList from 'components/card/CardList';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Card',  () => {
  const items = MockApp.getCardListItem();
  let renderedComponent;

  beforeEach(() => {
    spyOn($, 'get').and.callFake(req => {
      var d = $.Deferred();
      d.resolve(items);
      return d.promise();
    });

    let node = document.createElement('div');
    renderedComponent = ReactDOM.render(<Card />, node);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document);
  });

  it('should render instances of CardListItems in Card component based in state "items" ',  () => {
    var cards = TestUtils.scryRenderedComponentsWithType(renderedComponent, CardList)[0];
    expect(cards.props.items.length).toBe(items.length);
  });

});
