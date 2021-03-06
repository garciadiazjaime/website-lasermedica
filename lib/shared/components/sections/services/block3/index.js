'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _repeat = require('../../../elements/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _template = require('../../../templates/template4');

var _template2 = _interopRequireDefault(_template);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _locationUtil = require('../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block3 = function (_React$Component) {
  _inherits(Block3, _React$Component);

  function Block3() {
    _classCallCheck(this, Block3);

    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
  }

  _createClass(Block3, [{
    key: 'getServicesData',
    value: function getServicesData(data) {
      if (_lodash2.default.isArray(data) && data.length) {
        return data.slice(0, 5).map(function (item) {
          return {
            href: item.href,
            children: item.children
          };
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.getServicesData(_db2.default[_locationUtil2.default.getLang()]);
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(_repeat2.default, { data: data, Template: _template2.default })
      );
    }
  }]);

  return Block3;
}(_react2.default.Component);

exports.default = Block3;