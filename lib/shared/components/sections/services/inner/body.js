'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _repeat = require('../../../elements/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _template = require('../../../templates/template5');

var _template2 = _interopRequireDefault(_template);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Body).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'renderTitle',
    value: function renderTitle(data) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'h2',
          { className: data.className },
          data.text
        );
      }
      return null;
    }
  }, {
    key: 'renderSubtitle',
    value: function renderSubtitle(data) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'h3',
          { className: data.className },
          data.text
        );
      }
      return null;
    }
  }, {
    key: 'renderText',
    value: function renderText(data) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'p',
          { className: data.className },
          data.text
        );
      }
      return null;
    }
  }, {
    key: 'renderStrong',
    value: function renderStrong(data) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'strong',
            { className: data.className },
            data.text
          )
        );
      }
      return null;
    }
  }, {
    key: 'renderImage',
    value: function renderImage(data) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement('img', { className: data.className, src: data.src, alt: data.alt });
      }
      return null;
    }
  }, {
    key: 'renderList',
    value: function renderList(data) {
      if (!_lodash2.default.isEmpty(data)) {
        if (_lodash2.default.isArray(data.items) && data.items.length) {
          var itemsEl = data.items.map(function (item, index) {
            return _react2.default.createElement(
              'li',
              { key: index },
              item
            );
          });
          return itemsEl ? _react2.default.createElement(
            'ul',
            { className: data.className },
            itemsEl
          ) : null;
        }
      }
      return null;
    }
  }, {
    key: 'renderLink',
    value: function renderLink(data) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          _reactRouter.Link,
          { className: style[data.className], to: data.href },
          data.text
        );
      }
      return null;
    }
  }, {
    key: 'renderContent',
    value: function renderContent(data) {
      var _this2 = this;

      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item) {
          switch (item.type.toUpperCase()) {
            case 'TITLE':
              return _this2.renderTitle(item);
            case 'SUBTITLE':
              return _this2.renderSubtitle(item);
            case 'TEXT':
              return _this2.renderText(item);
            case 'STRONG':
              return _this2.renderStrong(item);
            case 'IMAGE':
              return _this2.renderImage(item);
            case 'LIST':
              return _this2.renderList(item);
            case 'LINK':
              return _this2.renderLink(item);
            default:
              return null;
          }
        });
      }
    }
  }, {
    key: 'renderControls',
    value: function renderControls(data, service) {
      var controls = _utils2.default.getPrevNext(data, service);
      return _react2.default.createElement(
        'div',
        null,
        controls.prev ? _react2.default.createElement(
          _reactRouter.Link,
          { className: '', to: controls.prev, title: 'anterior' },
          'Anterior'
        ) : _react2.default.createElement(
          'span',
          null,
          'Anterior'
        ),
        controls.next ? _react2.default.createElement(
          _reactRouter.Link,
          { className: '', to: controls.next, title: 'siguiente' },
          'Siguiente'
        ) : _react2.default.createElement(
          'span',
          null,
          'Siguiente'
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props;
      var data = _props.data;
      var menuItems = _props.menuItems;
      var service = _props.service;
      var category = _props.category;
      var common = _props.common;
      var classes = common.classes;

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid', id: style[category.replace('/', '')] },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-sm-6' },
          _react2.default.createElement(
            'div',
            { className: 'row ' + style.pad45 },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: style.btn9, to: '/servicios', title: 'servicios' },
              'Menú de Servicios'
            ),
            _react2.default.createElement(
              'div',
              { className: style[classes.class2] },
              _react2.default.createElement(_repeat2.default, { data: menuItems, Template: _template2.default })
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-sm-6' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: style['serviceControl_' + category.replace('/', '')] },
              this.renderControls(menuItems, service),
              _react2.default.createElement('div', { className: 'clearfix' })
            ),
            _react2.default.createElement(
              'div',
              { className: style.service_content },
              this.renderContent(data)
            )
          )
        )
      );
    }
  }]);

  return Body;
}(_react2.default.Component);

exports.default = Body;

Body.propTypes = {
  data: _react2.default.PropTypes.array.isRequired,
  menuItems: _react2.default.PropTypes.array.isRequired,
  service: _react2.default.PropTypes.string,
  category: _react2.default.PropTypes.string.isRequired,
  common: _react2.default.PropTypes.object
};