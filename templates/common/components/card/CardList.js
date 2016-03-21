'use strict';

import React from 'react';
import CardListItem from './CardListItem';

import './cards.<%= cssExtension %>';

export default React.createClass({

  propTypes: {
    items: React.PropTypes.array.isRequired
  },

  render() {
    let CardListItems = this.props.items.map(item => {
      return <CardListItem
                id={item.id}
                key={item.id}
                name={item.name}
                description={item.description}
                image={item.image} />;
    }, this);

    return (
      <div className="container">
        <ul className="list-group">
          {CardListItems}
        </ul>
      </div>
    );
  }
})
