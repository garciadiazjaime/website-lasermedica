'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

// **************** Services > General Menu ******************************

var Template3 = function (_React$Component) {
  _inherits(Template3, _React$Component);

  function Template3() {
    _classCallCheck(this, Template3);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Template3).apply(this, arguments));
  }

  _createClass(Template3, [{
    key: 'render',
    value: function render() {
      var data = this.props.data;

      return _react2.default.createElement(
        'div',
        { className: 'col-xs-12 col-sm-4 ' + style.wr8 },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: data.href, title: data.title, className: style.btn6 + ' ' + style[data.className] },
            _react2.default.createElement(
              'span',
              null,
              data.title
            )
          )
        )
      );
    }
  }]);

  return Template3;
}(_react2.default.Component);

exports.default = Template3;


Template3.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};