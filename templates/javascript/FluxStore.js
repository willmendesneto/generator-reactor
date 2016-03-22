'use strict';

import {EventEmitter} from 'events';
import assign from 'object-assign';
import <%= dispatcherName %> from '../dispatcher/<%= dispatcherName %>';

let <%= classedName %> = assign({}, EventEmitter.prototype, {});

<%= classedName %>.dispatchToken = <%= dispatcherName %>.register( action => {

  switch(action.type) {
    default:
  }

});

export default <%= classedName %>;
