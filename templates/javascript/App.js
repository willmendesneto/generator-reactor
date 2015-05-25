'use strict';
<% if (!reactRouter) { %>

var React = require('react/addons');
var ReactTransitionGroup = React.addons.TransitionGroup;

// CSS
require('normalize.css');
require('../styles/main.css');

var imageURL = require('../images/yeoman.png');

var <%= scriptAppName %> = React.createClass({
  render: function() {
    return (
      <div className="main">
        <ReactTransitionGroup transitionName="fade">
          <img src={imageURL} />
        </ReactTransitionGroup>
      </div>
    );
  }
});

// jshint ignore:line
<% } else { %>

var React = require('react'),
    Router = require('./routers')
;

var App = React.createClass({
  render: function () {
    return (
      <div className="container content">
          <Router/>
      </div>
    );
  }
});

React.render(
  <App />,
  document.getElementById('content')
);

<% } %>
