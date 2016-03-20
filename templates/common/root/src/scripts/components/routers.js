'use strict';

import Card from './card/Card';
import CardItem from './card/CardItem';
import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, useRouterHistory } from 'react-router';
import { createHashHistory } from 'history'
const appHistory = useRouterHistory(createHashHistory)({ queryKey: false });

let NotFoundPage = React.createClass({
  render: function() {
    return (
      <div>
        Sorry! Page is not found.
        Back to <Link to={`/`}>home page</Link>.
      </div>
    );
  }
});

let Content = React.createClass({
  render: function() {
    return (
      <Router history={appHistory}>
        <Route path="/" name="cards" component={Card} />
        <Route path="/cards/:cardId/:cardName" name="cardItem" component={CardItem} />
      </Router>
    );
  }
});

export default Content;
