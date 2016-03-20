'use strict';

var isGhPages = window.location.origin.indexOf('github.io') !== -1;

export default {
  GH_PAGES: isGhPages,
  CARDS_URL: isGhPages ? 'http://willmendesneto.github.io/generator-reactor/db.json' : 'http://localhost:3000/cards'
};
