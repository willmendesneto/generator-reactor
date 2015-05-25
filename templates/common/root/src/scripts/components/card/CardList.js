'use strict';

var React = require('react'),
    CardListItem = require('./CardListItem');

var CardList = React.createClass({

  render: function() {

    var CardListItems = this.props.items.map(function(item) {
      return <CardListItem id={item.id}
                       name={item.name}
                       description={item.description}
                       image={item.image} />;
    }.bind(this));

    return (
      <div className="container">
        <ul className="list-group">
          {CardListItems}
        </ul>
      </div>
    );
  }

});

module.exports = CardList;
