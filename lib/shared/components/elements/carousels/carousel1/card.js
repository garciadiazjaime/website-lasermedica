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

var _paragraph = require('../../paragraphs/paragraph1');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _title = require('../../titles/title1');

var _title2 = _interopRequireDefault(_title);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var SimpleCard = function (_Component) {
  _inherits(SimpleCard, _Component);

  function SimpleCard(props) {
    _classCallCheck(this, SimpleCard);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SimpleCard).call(this, props));
  }

  _createClass(SimpleCard, [{
    key: 'getWrapper',
    value: function getWrapper(data) {
      return data && _lodash2.default.isObject(data.style) ? data.style : null;
    }
  }, {
    key: 'getTitle',
    value: function getTitle(data) {
      var _this2 = this;

      if (data && _lodash2.default.isArray(data.text) && data.text.length) {
        return data.text.map(function (text) {
          return _react2.default.createElement('h1', { style: data.style, dangerouslySetInnerHTML: _this2.sanitize(text) });
        });
      }
      return null;
    }
  }, {
    key: 'getSubtitle',
    value: function getSubtitle(data) {
      var _this3 = this;

      if (data && _lodash2.default.isArray(data.text) && data.text.length) {
        return data.text.map(function (text) {
          return _react2.default.createElement('h2', { style: data.style, dangerouslySetInnerHTML: _this3.sanitize(text) });
        });
      }
      return null;
    }
  }, {
    key: 'getDescription',
    value: function getDescription(data) {
      var _this4 = this;

      if (data && _lodash2.default.isArray(data.text) && data.text.length) {
        return data.text.map(function (text) {
          return _react2.default.createElement('p', { style: data.style, dangerouslySetInnerHTML: _this4.sanitize(text) });
        });
      }
      return null;
    }
  }, {
    key: 'getLink',
    value: function getLink(data, index) {
      var text = data.text;
      var url = data.url;
      var style = data.style;

      if (text && url) {
        return _react2.default.createElement(_reactRouter.Link, { dangerouslySetInnerHTML: this.sanitize(text), to: url, key: index, style: style });
      }
      return null;
    }
  }, {
    key: 'getSprite',
    value: function getSprite(data, index) {
      if (data && data.style) {
        return _react2.default.createElement('div', { key: index, style: data.style, className: data.className });
      }
      return null;
    }
  }, {
    key: 'getImage',
    value: function getImage(data, index) {
      var src = data.src;
      var style = data.style;
      var alt = data.alt;
      var classes = data.classes;

      if (src) {
        return _react2.default.createElement('img', { src: src, style: style, alt: alt, className: classes, key: index });
      }
      return null;
    }
  }, {
    key: 'getCustomComponent',
    value: function getCustomComponent(element) {
      switch (element) {
        case 'Title1':
          return _title2.default;
        case 'Par1':
          return _paragraph2.default;
        default:
          return null;
      }
    }
  }, {
    key: 'getCustom',
    value: function getCustom(data, index) {
      var element = data.element;
      var className = data.className;
      var text = data.text;

      var CustomComponent = this.getCustomComponent(element);

      if (CustomComponent) {
        return _react2.default.createElement(
          CustomComponent,
          { className: className, classTitle: className, key: index },
          text
        );
      }
      return null;
    }
  }, {
    key: 'sanitize',
    value: function sanitize(value) {
      return {
        __html: value
      };
    }
  }, {
    key: 'render',
    value: function render() {
      var _this5 = this;

      var data = this.props.data;

      if (_lodash2.default.isArray(data.elements) && data.elements.length) {
        var wrapperStyle = this.getWrapper(data.wrapper);
        var wrapperClass = data.wrapper && data.wrapper.className ? data.wrapper.className : null;

        var Components = data.elements.map(function (item, index) {
          switch (item.type.toUpperCase()) {
            case 'TITLE':
              return _this5.getTitle(item);
            case 'SUBTITLE':
              return _this5.getSubtitle(item);
            case 'DESCRIPTION':
              return _this5.getDescription(item);
            case 'LINK':
              return _this5.getLink(item, index);
            case 'SPRITE':
              return _this5.getSprite(item, index);
            case 'IMAGE':
              return _this5.getImage(item, index);
            case 'CUSTOM':
              return _this5.getCustom(item, index);
            default:
              return null;
          }
        });
        return _react2.default.createElement(
          'div',
          { style: wrapperStyle, className: wrapperClass },
          Components
        );
      }
      return null;
    }
  }]);

  return SimpleCard;
}(_react.Component);

exports.default = SimpleCard;

SimpleCard.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};