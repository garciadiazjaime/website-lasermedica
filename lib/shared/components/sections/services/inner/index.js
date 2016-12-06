'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _header = require('./header');

var _header2 = _interopRequireDefault(_header);

var _body = require('./body');

var _body2 = _interopRequireDefault(_body);

var _db = require('../db');

var _db2 = _interopRequireDefault(_db);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 600, 4] */

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var ServiceInner = function (_React$Component) {
  _inherits(ServiceInner, _React$Component);

  function ServiceInner() {
    _classCallCheck(this, ServiceInner);

    return _possibleConstructorReturn(this, (ServiceInner.__proto__ || Object.getPrototypeOf(ServiceInner)).apply(this, arguments));
  }

  _createClass(ServiceInner, [{
    key: 'getServiceData',
    value: function getServiceData(data, categoryUrl) {
      if (_lodash2.default.isArray(data) && data.length) {
        var categoryItems = _utils2.default.setCategoryItems(data, categoryUrl);
        for (var i = 0, len = categoryItems.length; i < len; i++) {
          var href = categoryItems[i].href;

          if (href) {
            return categoryItems[i];
          }
        }
      }
      return null;
    }
  }, {
    key: 'getData',
    value: function getData(category, service) {
      try {
        return {
          header: require('../db' + category + '/common'),
          body: require('../db' + category + '/services' + service)
        };
      } catch (err) {
        console.error(err.message);
        return null;
      }
    }
  }, {
    key: 'getMenuItems',
    value: function getMenuItems(data, categoryUrl, service) {
      if (_lodash2.default.isArray(data) && data.length) {
        var serviceData = this.getServiceData(data, categoryUrl);

        if (_lodash2.default.isArray(serviceData.children) && serviceData.children.length) {
          return serviceData.children.map(function (item, index) {
            var className = '';
            var activeClass = style.active;
            if (!service && index === 0) {
              className = activeClass;
            } else if (service && !className) {
              className = service.toUpperCase() === item.href.toUpperCase() ? activeClass : null;
            }
            return {
              title: item.title,
              href: [categoryUrl, item.href].join(''),
              className: className
            };
          });
        }
      }
      return null;
    }
  }, {
    key: 'getDefaultValues',
    value: function getDefaultValues(data, sectionUrl, categoryUrl, serviceUrl) {
      var response = {
        section: sectionUrl,
        category: categoryUrl,
        service: serviceUrl
      };

      if (!serviceUrl) {
        if (_lodash2.default.isArray(data) && data.length) {
          for (var i = 0, len = data.length; i < len; i++) {
            var categoryTmp = [sectionUrl, categoryUrl].join('');
            if (data[i].href.toUpperCase() === categoryTmp.toUpperCase()) {
              var children = data[i].children;
              for (var j = 0, len2 = children.length; j < len2; j++) {
                var type = children[j].type;

                if (type.toUpperCase() === 'LIST') {
                  response.service = children[j].children[0].href; // .replace('/', '');
                  break;
                }
              }
              if (response.service) {
                break;
              }
            }
          }
        }
      }

      return response;
    }
  }, {
    key: 'render',
    value: function render() {
      var pathname = this.props.location.pathname;
      var bits = pathname.split('/');
      var category = '/' + bits[2];
      var service = bits[3] ? '/' + bits[3] : null;
      var params = this.getDefaultValues(_db2.default, '/servicios', category, service);
      var data = this.getData(category, params.service);
      var categoryUrl = [params.section, params.category].join('');
      var menuItems = this.getMenuItems(_db2.default, categoryUrl, service);
      return _react2.default.createElement(
        'div',
        { className: 'container-fluid', id: bits[2] },
        _react2.default.createElement(_header2.default, { data: data.header }),
        _react2.default.createElement(_body2.default, { data: data.body, menuItems: menuItems, service: service, category: category, common: data.header })
      );
    }
  }]);

  return ServiceInner;
}(_react2.default.Component);

exports.default = ServiceInner;


ServiceInner.propTypes = {
  location: _react2.default.PropTypes.any
};