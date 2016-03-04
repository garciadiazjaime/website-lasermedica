'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sanitize = require('../../../../utils/sanitize');

var _sanitize2 = _interopRequireDefault(_sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};

var Paragraph1 = function (_React$Component) {
  _inherits(Paragraph1, _React$Component);

  function Paragraph1() {
    _classCallCheck(this, Paragraph1);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Paragraph1).apply(this, arguments));
  }

  _createClass(Paragraph1, [{
    key: 'render',
    value: function render() {
      var children = this.props.data ? (0, _sanitize2.default)(this.props.data) : this.props.children;
      return this.props.data ? _react2.default.createElement('p', { className: style[this.props.className], dangerouslySetInnerHTML: children }) : _react2.default.createElement(
        'p',
        { className: style[this.props.className] },
        children
      );
    }
  }]);

  return Paragraph1;
}(_react2.default.Component);

exports.default = Paragraph1;

Paragraph1.propTypes = {
  children: _react2.default.PropTypes.any,
  className: _react2.default.PropTypes.string,
  data: _react2.default.PropTypes.string
};