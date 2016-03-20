'use strict';

import CardListItem from 'components/card/CardListItem';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('CardListItem', () => {
  let item, renderedComponent;

  beforeEach(() => {
    item = MockApp.getCardItem();
    let node = document.createElement('div');
    renderedComponent = ReactDOM.render(
      <CardListItem
        id={item.id}
        key={item.id}
        name={item.name}
        description={item.description}
        image={item.image} />
    , node);
  });

  afterEach(() => {
    ReactDOM.unmountComponentAtNode(document);
  });

  it('should create a new instance of CardListItem with all props', () => {
    expect(Object.keys(renderedComponent.props).length).toBe(4);
    expect(renderedComponent.props.id).toBe(item.id);
    expect(renderedComponent.props.name).toBe(item.name);
    expect(renderedComponent.props.description).toBe(item.description);
    expect(renderedComponent.props.image).toBe(item.image);
  });

  it('should render props info in component', () => {
    const image = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'card-image');

    expect(image.props.src).toBe(renderedComponent.props.image);
    expect(image.props.alt).toBe(renderedComponent.props.name);
    expect(image.props.title).toBe(renderedComponent.props.name);

    const title = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'title');
    expect(title.getDOMNode().textContent).toBe(renderedComponent.props.name);

    const desc = TestUtils.findRenderedDOMComponentWithClass(renderedComponent, 'desc');
    expect(desc.getDOMNode().textContent).toBe(renderedComponent.props.description);
  });

});
