'use strict';

import store from 'stores/card/CardStore';
import $ from 'jquery';

describe('CardStore', () => {

  describe('#getAll', () => {

    beforeEach(() => {
      const items = MockApp.getCardListItem();
      spyOn($, 'get').and.callFake(req => {
        var d = $.Deferred();
        d.resolve(items);
        return d.promise();
      });
    });

    it('#getAll', () => {
      store.getAll().then(function(data) {
        expect(data).toBeArrayOfObjects();
      });
    });
  });

  describe('#findById', () => {

    beforeEach(() => {
      const item = MockApp.getCardItem();
      spyOn($, 'get').and.callFake(req => {
        var d = $.Deferred();
        d.resolve(item);
        return d.promise();
      });
    });

    it('#findById', () => {
      store.findById().then(data => {
        expect(data).toBeObject();
        expect(Object.keys(data).length).toBe(5);
      });
    });
  });

});
