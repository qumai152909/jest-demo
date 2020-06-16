'use strict';

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

require('../src/index.less');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var a = new _promise2.default(function (resolve) {
  console.log('Promise');
  resolve();
});

a.then(function () {
  console.log('resolved.');
});