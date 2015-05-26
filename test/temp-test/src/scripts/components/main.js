'use strict';


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


