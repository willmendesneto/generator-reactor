'use strict';

import React         from 'react';
import AppConstants      from '../../constants/AppConstants';
import $ from 'jquery';

let CardStore = {
  getAll: () => {
    return $.get(AppConstants.CARDS_URL);
  },
  findById: (cardId) => {
    if (!AppConstants.GH_PAGES) {
      return $.get(AppConstants.CARDS_URL + '/' + cardId);
    }

    var dfd = $.Deferred();
    $.get(AppConstants.CARDS_URL).then((data) => {
      dfd.resolve(data.filter(function(item){
        return parseInt(item.id) === parseInt(cardId);
      })[0]);
    });
    return dfd.promise();
  }
};

export default CardStore;
