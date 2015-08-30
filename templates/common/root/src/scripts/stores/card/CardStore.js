'use strict';

var React         = require('react');
var AppConstants      = require('../../constants/AppConstants');
var jQuery = require('jQuery');

var CardStore = {
  getAll: function() {
    return jQuery.get(AppConstants.CARDS_URL);
  },

  findById: findByIdMock

};

function findByIdMock(cardId) {
  if (!AppConstants.GH_PAGES) {
    return jQuery.get(AppConstants.CARDS_URL + '/' + cardId);
  }

  var dfd = jQuery.Deferred();
  jQuery.get(AppConstants.CARDS_URL).then(function(data) {
    dfd.resolve(data.filter(function(item){
      return parseInt(item.id) === parseInt(cardId);
    })[0]);
  });
  return dfd.promise();
}

module.exports = CardStore;
