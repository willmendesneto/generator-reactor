'use strict';

var React = require('react');<% if(rich && architecture === 'reflux'){%>
var Reflux = require('Reflux'); <%}%>
<% if(rich && architecture === 'flux' || architecture === 'reflux'){%>
//var Actions = require('actions/xxx')
<%}%>
<% if (!!style && stylesLanguage === 'css') { %>require('styles/<%= classedFileName %>.css');<% } %><%
if (!!style && stylesLanguage === 'sass')   { %>require('styles/<%= classedFileName %>.sass');<% } %><%
if (!!style && stylesLanguage === 'scss')   { %>require('styles/<%= classedFileName %>.scss');<% } %><%
if (!!style && stylesLanguage === 'less')   { %>require('styles/<%= classedFileName %>.less');<% } %><%
if (!!style && stylesLanguage === 'stylus') { %>require('styles/<%= classedFileName %>.styl');<% } %>

var <%= classedName %> = React.createClass({<% if(rich){%>
  mixins: [<% if(architecture === 'reflux'){%>Reflux.ListenerMixin<%}%>],
  getInitialState: function() { return({}) },
  getDefaultProps: function() {},
  componentWillMount: function() {},
  componentDidMount: function() {},
  shouldComponentUpdate: function() {},
  componentDidUpdate: function() {},
  componentWillUnmount: function() {},<%}%>

  render: function () {
    return (
        <div>
          <p>Content for <%= classedName %></p>
        </div>
      );
  }
});

<% if (es6) { %>export default <%= classedName %>; <% }
else { %>module.exports = <%= classedName %>; <% } %>
