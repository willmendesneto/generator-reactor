'use strict';

var React         = require('react');
var CardList      = require('./CardList');
var CardStore      = require('../../stores/card/CardStore');

var Card = React.createClass({

  getInitialState: function() {
    return {
      items: []
    };
  },

  componentDidMount: function() {
    this.loadData();
  },

  loadData: function() {
    CardStore.getAll().then(function(items) {
      if (this.isMounted()) {
        this.setState({
          items: items
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
        <div>
          <br />
          <br />
          <CardList items={this.state.items} />
        </div>
    );
  }

});

module.exports = Card;
