'use strict';

var React         = require('react'),
    Link = require('react-router-component').Link,
    CardStore      = require('../../stores/card/CardStore')
;

var CardItem = React.createClass({

  getInitialState: function() {
    return {
      item: {}
    };
  },

  componentDidMount: function() {
    this.loadData();
  },

  loadData: function() {
    CardStore.findById(this.props.cardId).then( function(item) {
      if (this.isMounted()) {
        this.setState({
          item: item
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      <div className="col-sm-12 card-item">
          <h2>{this.state.item.name}</h2>
          <img className="card-item-image clearfix" src={this.state.item.image}
              alt={this.state.item.name}
              title={this.state.item.name}
              width="200"
              height="200" />

        <div className="info">
          <div className="desc">{this.state.item.description}</div>
          <p>Website: <a href={this.state.item.website} target="_blank">{this.state.item.website}</a></p>
        </div>

          <Link className="btn btn-primary btn-sm" href="/">
          BACK TO CARDS
          </Link>
      </div>
    );
  }

});

module.exports = CardItem;
