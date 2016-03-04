'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _block = require('./block1');

var _block2 = _interopRequireDefault(_block);

var _block3 = require('./block2');

var _block4 = _interopRequireDefault(_block3);

var _block5 = require('./block3');

var _block6 = _interopRequireDefault(_block5);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ServicesSection = function (_React$Component) {
  _inherits(ServicesSection, _React$Component);

  function ServicesSection() {
    _classCallCheck(this, ServicesSection);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(ServicesSection).apply(this, arguments));
  }

  _createClass(ServicesSection, [{
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
      var menuData = this.getMenuData(_data2.default.services);
      var servicesData = this.getServicesData(_data2.default.services);
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_block2.default, { data: _data2.default.block1 }),
        _react2.default.createElement(_block4.default, { data: menuData }),
        _react2.default.createElement(_block6.default, { data: servicesData })
      );
    }
  }]);

  return ServicesSection;
}(_react2.default.Component);

exports.default = ServicesSection;