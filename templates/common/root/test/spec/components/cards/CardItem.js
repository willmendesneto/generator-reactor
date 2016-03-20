'use strict';

import CardItem from 'components/card/CardItem';
import $ from 'jquery';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('CardItem', () => {

  var component, item, renderedComponent;

  beforeEach(() => {
    item = MockApp.getCardItem();
    spyOn($, 'get').and.callFake( (req) => {
      var d = $.Deferred();
      d.resolve(item);
      return d.promise();
    });

    let node = document.createElement('div');
    const routeParams = { cardId: 1 };
    renderedComponent = ReactDOM.render(<CardItem params={routeParams}/>, node);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document);
  });

  it('should create a new instance of CardItem with all state', () => {
    expect(Object.keys(renderedComponent.state.item).length).toBe(5);
    expect(renderedComponent.state.item.id).toBe(item.id);
    expect(renderedComponent.state.item.name).toBe(item.name);
    expect(renderedComponent.state.item.website).toBe(item.website);
    expect(renderedComponent.state.item.description).toBe(item.description);
    expect(renderedComponent.state.item.image).toBe(item.image);
  });

  it('should render state info in component', () => {
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
