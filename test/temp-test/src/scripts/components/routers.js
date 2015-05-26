'use strict';

var React    = require('react'),
    Router   = require('react-router-component'),
    Card = require('./card/Card'),
    CardItem = require('./card/CardItem')
;

var Locations = Router.Locations,
    Location = Router.Location,
    NotFound = Router.NotFound,
    Link = Router.Link;

var NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        Sorry! Page is not found.
        Back to <Link href="/">home page</Link>.
      </div>
    );
  }
});

var Content = React.createClass({
  render: function() {
    return (
      <Locations hash>
        <Location path="/" handler={Card} />
        <Location path="/cards/:cardId/:cardName" handler={CardItem} />
        <NotFound handler={NotFoundPage} />
      </Locations>
    );
  }
});

module.exports = Content;
