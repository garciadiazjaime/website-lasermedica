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

var _template = require('../../../templates/template3');

var _template2 = _interopRequireDefault(_template);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _locationUtil = require('../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block2 = function (_React$Component) {
  _inherits(Block2, _React$Component);

  function Block2() {
    _classCallCheck(this, Block2);

    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
  }

  _createClass(Block2, [{
    key: 'getMenuData',
    value: function getMenuData(data) {
      var items = [];
      if (_lodash2.default.isArray(data) && data.length) {
        data.map(function (item) {
          if (item.isRoot) {
            items.push({
              title: item.title,
              description: item.description,
              href: item.href,
              className: item.className
            });
          }
        });
      }
      return items;
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.getMenuData(_db2.default[_locationUtil2.default.getLang()]);
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-10 col-sm-offset-1' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(_repeat2.default, { data: data, Template: _template2.default })
            )
          )
        )
      );
    }
  }]);

  return Block2;
}(_react2.default.Component);

exports.default = Block2;