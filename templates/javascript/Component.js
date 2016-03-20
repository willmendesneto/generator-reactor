'use strict';

var React = require('react');<% if(rich && architecture === 'reflux'){%>
var Reflux = require('Reflux'); <%}%>
<% if(rich && architecture === 'flux' || architecture === 'reflux'){%>
//var Actions = require('actions/xxx')
<%}%>
<% if (!!style && stylesLanguage === 'sass')   { %>require('styles/<%= classedFileName %>.sass');
<% } else if (!!style && stylesLanguage === 'scss')   { %>require('styles/<%= classedFileName %>.scss');
<% } else if (!!style && stylesLanguage === 'less')   { %>require('styles/<%= classedFileName %>.less');
<% } else if (!!style && stylesLanguage === 'stylus') { %>require('styles/<%= classedFileName %>.styl');
<% } else { %>require('styles/<%= classedFileName %>.css');<% } %>

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
