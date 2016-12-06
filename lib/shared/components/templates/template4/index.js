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

var _repeat = require('../../elements/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _template = require('../template5');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

// **************** Services Blocks rendered on Service Landing Page
var Template4 = function (_React$Component) {
  _inherits(Template4, _React$Component);

  function Template4() {
    _classCallCheck(this, Template4);

    return _possibleConstructorReturn(this, (Template4.__proto__ || Object.getPrototypeOf(Template4)).apply(this, arguments));
  }

  _createClass(Template4, [{
    key: 'renderContent',
    value: function renderContent(data) {
      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item, index) {
          return _react2.default.createElement(
            'p',
            { className: style.par2, key: index },
            item
          );
        });
      }
    }
  }, {
    key: 'renderServiceChild',
    value: function renderServiceChild(data, serviceURL) {
      switch (_lodash2.default.isString(data.type) && data.type.toUpperCase()) {
        case 'TITLE':
          return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-7 ' + style.pad45 },
              _react2.default.createElement(
                'h2',
                { className: style.title11 + ' ' + style[data.className] },
                data.title
              )
            )
          );
        case 'LIST':
          var classes = data.classes,
              texts = data.texts,
              href = data.href,
              children = data.children;

          var childrenData = children.map(function (item) {
            return {
              title: item.title,
              href: [serviceURL + item.href].join('')
            };
          });
          return _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-7 ' + style.pad45 },
              _react2.default.createElement('div', { className: style[classes.class1] + ' ' + style.service + ' img-responsive' }),
              this.renderContent(texts),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: '/contacto' + href, title: href, className: style[classes.class2] },
                'AGENDAR CITA'
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-5 col-sm-offset-0' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style[classes.class3] + ' ' + style.pad45 },
                _react2.default.createElement(_repeat2.default, { data: childrenData, Template: _template2.default })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12' },
              _react2.default.createElement('hr', { className: style.hr })
            )
          );
        default:
          return null;
      }
    }
  }, {
    key: 'renderBlock',
    value: function renderBlock(data, href) {
      var _this2 = this;

      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { key: index, className: 'container-fluid' },
            _this2.renderServiceChild(item, href)
          );
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        null,
        this.renderBlock(data.children, data.href)
      );
    }
  }]);

  return Template4;
}(_react2.default.Component);

exports.default = Template4;


Template4.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  href: _react2.default.PropTypes.any
};