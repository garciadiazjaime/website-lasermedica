'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _sanitize = require('../../../../utils/sanitize');

var _sanitize2 = _interopRequireDefault(_sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Button1 = function (_React$Component) {
  _inherits(Button1, _React$Component);

  function Button1() {
    _classCallCheck(this, Button1);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Button1).apply(this, arguments));
  }

  _createClass(Button1, [{
    key: 'render',
    value: function render() {
      var _props = this.props;
      var data = _props.data;
      var href = _props.href;
      var title = _props.title;
      var className = _props.className;
      var type = _props.type;

      var children = data ? (0, _sanitize2.default)(data) : this.props.children;
      return !type ? _react2.default.createElement(
        _reactRouter.Link,
        { className: style[className], to: href, title: title },
        data ? _react2.default.createElement('div', { className: style.title, dangerouslySetInnerHTML: children }) : _react2.default.createElement(
          'div',
          { className: style.title },
          this.props.children
        )
      ) : _react2.default.createElement(
        'a',
        { className: style[className], href: href, title: title, target: '_blank' },
        this.props.children
      );
    }
  }]);

  return Button1;
}(_react2.default.Component);

exports.default = Button1;

Button1.propTypes = {
  children: _react2.default.PropTypes.any,
  className: _react2.default.PropTypes.string,
  href: _react2.default.PropTypes.string.isRequired,
  title: _react2.default.PropTypes.string.isRequired,
  data: _react2.default.PropTypes.string,
  type: _react2.default.PropTypes.string
};