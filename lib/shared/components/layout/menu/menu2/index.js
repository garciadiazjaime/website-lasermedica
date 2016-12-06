'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _db = require('../../../sections/services/db');

var _db2 = _interopRequireDefault(_db);

var _cover = require('./cover');

var _cover2 = _interopRequireDefault(_cover);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */


var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var ServicesMenu = function (_React$Component) {
  _inherits(ServicesMenu, _React$Component);

  function ServicesMenu(props) {
    _classCallCheck(this, ServicesMenu);

    var _this = _possibleConstructorReturn(this, (ServicesMenu.__proto__ || Object.getPrototypeOf(ServicesMenu)).call(this, props));

    _this.state = {
      selectedServiceIndex: 0
    };
    return _this;
  }

  _createClass(ServicesMenu, [{
    key: 'getServicesData',
    value: function getServicesData(data) {
      var getItems = function getItems(children) {
        var i = 0;
        var len = children.length;
        for (; i < len; i++) {
          if (children[i].type.toUpperCase() === 'LIST') {
            return children[i].children;
          }
        }
      };

      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item) {
          return {
            href: item.href,
            title: item.title,
            items: getItems(item.children)
          };
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var servicesData = this.getServicesData(_db2.default);
      return _react2.default.createElement(
        'div',
        { id: 'services-menu', className: 'container-fluid hidden', style: { position: 'relative' } },
        _react2.default.createElement(
          'div',
          { className: 'row ' + style.services_menu },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-3 ' + style.leftPanel },
            _react2.default.createElement(
              'h3',
              null,
              'Nuestros Servicios'
            ),
            _react2.default.createElement(
              'p',
              null,
              'Conoce nuestros servicios y descubre co\u0301mo podemos ayudarte.'
            ),
            _react2.default.createElement('div', { className: 'bgImage' })
          ),
          _react2.default.createElement(_cover2.default, { data: servicesData })
        )
      );
    }
  }]);

  return ServicesMenu;
}(_react2.default.Component);

exports.default = ServicesMenu;