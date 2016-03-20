'use strict';

import React from 'react';
import { Link } from 'react-router';
import CardStore from '../../stores/card/CardStore';

import './cards.scss';

export default React.createClass({

  getInitialState() {
    return {
      item: {}
    };
  },

  componentDidMount() {
    this.loadData();
  },

  loadData() {
    CardStore.findById(this.props.params.cardId).then(item => {
      if (this.isMounted()) {
        this.setState({
          item: item
        });
      }
    }, this);
  },

  render() {
    return (
      <div className="col-sm-12 card-item">
          <h2>{this.state.item.name}</h2>
          <img className="card-item-image clearfix"
              src={this.state.item.image}
              alt={this.state.item.name}
              title={this.state.item.name}
              width="200"
              height="200" />

        <div className="info">
          <div className="desc">{this.state.item.description}</div>
          <p>Website: <a href={this.state.item.website} target="_blank">{this.state.item.website}</a></p>
        </div>

          <Link className="btn btn-primary btn-sm" to="/">
          BACK TO CARDS
          </Link>
      </div>
    );
  }

})
