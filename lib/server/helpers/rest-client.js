'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _rest = require('rest');

var _rest2 = _interopRequireDefault(_rest);

var _mime = require('rest/interceptor/mime');

var _mime2 = _interopRequireDefault(_mime);

var _errorCode = require('rest/interceptor/errorCode');

var _errorCode2 = _interopRequireDefault(_errorCode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = _rest2.default.wrap(_mime2.default, { mime: 'application/json' }).wrap(_errorCode2.default, { code: 300 });