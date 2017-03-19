'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _db = require('../../../sections/services/db');

var _db2 = _interopRequireDefault(_db);

var _locationUtil = require('../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Services = function (_React$Component) {
  _inherits(Services, _React$Component);

  function Services() {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
  }

  _createClass(Services, [{
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
    key: 'renderServices',
    value: function renderServices(data) {
      var renderServiceChildren = function renderServiceChildren(href, items) {
        var className = items.length > 5 ? 'col-xs-12 col-md-6' : 'col-sm-12';
        return items.map(function (service, index) {
          return _react2.default.createElement(
            'div',
            { className: className + ' ' + style.serviceElement, key: index },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement(
                _reactRouter.Link,
                { to: href + service.href, title: service.title },
                service.title
              )
            )
          );
        });
      };
      var servicesEl = data.map(function (item, index) {
        var childrenEl = renderServiceChildren(item.href, item.items);
        return _react2.default.createElement(
          'div',
          { className: 'col-sm-4', key: index },
          _react2.default.createElement(
            _reactRouter.Link,
            { className: style.serviceTitle, to: item.href, title: item.title },
            item.title
          ),
          childrenEl
        );
      });
      return _react2.default.createElement(
        'div',
        { className: 'row' },
        servicesEl
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var servicesData = this.getServicesData(_db2.default[_locationUtil2.default.getLang()]);

      return _react2.default.createElement(
        'div',
        null,
        this.renderServices(servicesData)
      );
    }
  }]);

  return Services;
}(_react2.default.Component);

exports.default = Services;