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

var _repeat = require('../../../elements/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _template = require('../../../templates/template5');

var _template2 = _interopRequireDefault(_template);

var _utils = require('./utils');

var _utils2 = _interopRequireDefault(_utils);

var _locationUtil = require('../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Body = function (_React$Component) {
  _inherits(Body, _React$Component);

  function Body() {
    _classCallCheck(this, Body);

    return _possibleConstructorReturn(this, (Body.__proto__ || Object.getPrototypeOf(Body)).apply(this, arguments));
  }

  _createClass(Body, [{
    key: 'renderTitle',
    value: function renderTitle(data, index) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'h2',
          { className: data.className, key: index },
          data.text
        );
      }
      return null;
    }
  }, {
    key: 'renderSubtitle',
    value: function renderSubtitle(data, index) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'h3',
          { className: data.className, key: index },
          data.text
        );
      }
      return null;
    }
  }, {
    key: 'renderText',
    value: function renderText(data, index) {
      if (!_lodash2.default.isEmpty(data) && _lodash2.default.isString(data.text)) {
        return _react2.default.createElement(
          'p',
          { className: style[data.className], key: index },
          data.text
        );
      } else if (!_lodash2.default.isEmpty(data) && _lodash2.default.isArray(data.text)) {
        return data.text.map(function (item, index2) {
          return _react2.default.createElement(
            'p',
            { className: data.className ? style[data.className] : '', key: index2 },
            item
          );
        });
      }
      return null;
    }
  }, {
    key: 'renderStrong',
    value: function renderStrong(data, index) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          'p',
          { key: index, className: style[data.className] },
          _react2.default.createElement(
            'strong',
            null,
            data.text
          )
        );
      }
      return null;
    }
  }, {
    key: 'renderImage',
    value: function renderImage(data, index) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement('img', { className: data.className, src: data.src, alt: data.alt, key: index });
      }
      return null;
    }
  }, {
    key: 'renderList',
    value: function renderList(data, index) {
      if (data && _lodash2.default.isArray(data.items) && data.items.length) {
        var itemsEl = data.items.map(function (item, index2) {
          return _react2.default.createElement(
            'li',
            { key: index2 },
            item
          );
        });
        return itemsEl ? _react2.default.createElement(
          'ul',
          { className: data.className, key: index },
          itemsEl
        ) : null;
      }
      return null;
    }
  }, {
    key: 'renderListLink',
    value: function renderListLink(data, index) {
      if (data && _lodash2.default.isArray(data.items) && data.items.length) {
        var itemsEl = data.items.map(function (item, index2) {
          return _react2.default.createElement(
            'li',
            { key: index2 },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: item.href, title: item.title },
              item.title
            )
          );
        });
        return itemsEl ? _react2.default.createElement(
          'ul',
          { className: data.className, key: index },
          itemsEl
        ) : null;
      }
      return null;
    }
  }, {
    key: 'renderLink',
    value: function renderLink(data, index) {
      if (!_lodash2.default.isEmpty(data)) {
        return _react2.default.createElement(
          _reactRouter.Link,
          { className: style[data.className], to: data.href, key: index },
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
        return data.map(function (item, index) {
          switch (item.type.toUpperCase()) {
            case 'TITLE':
              return _this2.renderTitle(item, index);
            case 'SUBTITLE':
              return _this2.renderSubtitle(item, index);
            case 'TEXT':
              return _this2.renderText(item, index);
            case 'STRONG':
              return _this2.renderStrong(item, index);
            case 'IMAGE':
              return _this2.renderImage(item, index);
            case 'LIST_LINK':
              return _this2.renderListLink(item, index);
            case 'LIST':
              return _this2.renderList(item, index);
            case 'LINK':
              return _this2.renderLink(item, index);
            default:
              return null;
          }
        });
      }
    }
  }, {
    key: 'renderControls',
    value: function renderControls(data, service) {
      // todo: improve texts and ternary
      var controls = _utils2.default.getPrevNext(data, service);
      var controlTitles = _locationUtil2.default.getLang() === 'ES' ? {
        back: 'Anterior',
        next: 'Siguiente'
      } : {
        back: 'Back',
        next: 'Next'
      };
      return _react2.default.createElement(
        'div',
        null,
        controls.prev ? _react2.default.createElement(
          _reactRouter.Link,
          { className: '', to: controls.prev, title: 'anterior' },
          controlTitles.back
        ) : _react2.default.createElement(
          'span',
          null,
          controlTitles.back
        ),
        controls.next ? _react2.default.createElement(
          _reactRouter.Link,
          { className: '', to: controls.next, title: 'siguiente' },
          controlTitles.next
        ) : _react2.default.createElement(
          'span',
          null,
          controlTitles.next
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          menuItems = _props.menuItems,
          service = _props.service,
          category = _props.category,
          common = _props.common;

      var serviceId = service && service.indexOf('/') !== -1 ? service.replace('/', '') : null;
      var classes = common.classes;

      var listTitle = _locationUtil2.default.getLang() === 'ES' ? 'Menú de Servicios' : 'Services Menu';
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
              listTitle
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
              { className: style.service_content, id: serviceId },
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