// // import jsdom from 'jsdom';
// // import chai from 'chai';
// // import chaiImmutable from 'chai-immutable';
// //
// // const doc = jsdom.jsdom('<!doctype html><html><body></body></html>');
// // const win = doc.defaultView;
// //
// // global.document = doc;
// // global.window = win;
// //
// // Object.keys(window).forEach((key) => {
// //     if (!(key in global)) {
// //         global[key] = window[key];
// //     }
// // });
// //
// // chai.use(chaiImmutable);
//
// var context = require.context('.', true, /.+\.spec\.jsx?$/);
// context.keys().forEach(context);
// module.exports = context;

global.SRC = '../src';
