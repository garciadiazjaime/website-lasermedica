'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

var LocationUtil = function () {
  function LocationUtil(location) {
    _classCallCheck(this, LocationUtil);

    this.location = location;
    this.lang = this.getLangByLocation(location);
  }

  _createClass(LocationUtil, [{
    key: 'getSpanishLocation',
    value: function getSpanishLocation() {
      if (this.lang === 'ES') {
        return this.location;
      }
      return '/inicio';
    }
  }, {
    key: 'getEnglishLocation',
    value: function getEnglishLocation() {
      if (this.lang === 'EN') {
        return this.location;
      }
      return '/home';
    }
  }, {
    key: 'getLangByLocation',
    value: function getLangByLocation(location) {
      if (location === '/') {
        return 'ES';
      }
      return 'EN';
    }
  }]);

  return LocationUtil;
}();

exports.default = LocationUtil;