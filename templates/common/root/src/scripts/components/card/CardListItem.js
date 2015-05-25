'use strict';

var React = require('react');
var Link = require('react-router-component').Link;
var UrlHelper = require('../../helpers/UrlHelper');

var CardListItem = React.createClass({

  render: function() {

    var url = '/cards/' + this.props.id + '/' +
              UrlHelper.generateUrlFriendly(this.props.name);

    return (
      <li id={this.props.id} className="col-lg-3 col-sm-6">
        <div className="card hovercard">
          <div className="cardheader"></div>
          <div className="avatar">
            <img className="card-image" src={this.props.image}
                alt={this.props.name}
                title={this.props.name}
                width="200"
                height="200" />
          </div>
          <div className="card-info">
            <div className="title">
                {this.props.name}
            </div>
            <div className="desc">{this.props.description}</div>
          </div>
          <div className="card-bottom">
            <Link className="btn btn-primary btn-sm" href={url}>
                + MORE
            </Link>
          </div>
        </div>
      </li>
    );
  }

});

module.exports = CardListItem;
