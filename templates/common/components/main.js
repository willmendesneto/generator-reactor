import 'babel-polyfill';
import React from 'react';
import Router from './routers';
import { render } from 'react-dom';

import '../../styles/main.<%= cssExtension %>';

let App = React.createClass({
  render: function () {
    return (
      <div className="container content">
        <Router/>
      </div>
    );
  }
});

render(
  <App />,
  document.getElementById('content')
);
