'use strict';

import React from 'react';<% if (!!style) {%>

import './<%= classedFileName %>.<%= cssExtension %>';<% } %>

export default class <%= classedName %> extends React.Component {

  constructor(props, context) {
    super(props, context);
  }<% if(rich){%>

  getInitialState() {
     return({});
  }

  getDefaultProps() {}
  componentWillMount() {}
  componentDidMount() {}
  shouldComponentUpdate() {}
  componentDidUpdate() {}
  componentWillUnmount() {}<%}%>

  render() {
    return (
      <div>
        <p>Content for <%= classedName %></p>
      </div>
    );
  }
}
