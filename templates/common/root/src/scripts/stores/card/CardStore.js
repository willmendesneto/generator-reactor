'use strict';

var React         = require('react');
var AppConstants      = require('../../constants/AppConstants');
var jQuery = require('jQuery');

var CardStore = {
  getAll: function() {
    return jQuery.get(AppConstants.CARDS_URL);
  },

  findById: function(cardId) {
    return jQuery.get(AppConstants.CARDS_URL + '/' + cardId);
  }

};

module.exports = CardStore;
