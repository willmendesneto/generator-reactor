'use strict';

import Reflux from 'reflux';
import Actions from 'actions/..';

const <%= classedName %> = Reflux.createStore({
  listenables: Actions,
});

export default <%= classedName %>;
