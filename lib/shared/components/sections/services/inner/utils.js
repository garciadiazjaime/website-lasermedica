'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var Utils = function () {
  function Utils() {
    _classCallCheck(this, Utils);
  }

  _createClass(Utils, null, [{
    key: 'setCategoryItems',
    value: function setCategoryItems(data, categoryUrl) {
      var response = [];
      data.map(function (item) {
        if (item.href === categoryUrl) {
          response.push.apply(response, item.children);
        }
      });
      return response;
    }
  }, {
    key: 'getPrevNext',
    value: function getPrevNext(data, service) {
      var prev = '';
      var next = '';
      if (_lodash2.default.isArray(data) && data.length > 1) {
        if (!service) {
          next = data[1].href;
        } else {
          for (var i = 0, len = data.length; i < len; i++) {
            var bits = data[i].href.split('/');
            var currentService = '/' + bits.pop();
            if (currentService.toUpperCase() === service.toUpperCase()) {
              if (i === 0) {
                next = data[i + 1].href;
              } else if (i + 1 < len) {
                next = data[i + 1].href;
                prev = data[i - 1].href;
              } else if (i + 1 === len) {
                prev = data[i - 1].href;
              }
            }
          }
        }
      }
      return {
        prev: prev,
        next: next
      };
    }
  }]);

  return Utils;
}();

exports.default = Utils;