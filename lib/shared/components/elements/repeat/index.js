'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Repeat = function (_React$Component) {
  _inherits(Repeat, _React$Component);

  function Repeat() {
    _classCallCheck(this, Repeat);

    return _possibleConstructorReturn(this, (Repeat.__proto__ || Object.getPrototypeOf(Repeat)).apply(this, arguments));
  }

  _createClass(Repeat, [{
    key: 'renderElement',
    value: function renderElement(data, Template) {
      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item, index) {
          return _react2.default.createElement(Template, { data: item, key: index, index: index });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          data = _props.data,
          Template = _props.Template,
          className = _props.className;

      return _react2.default.createElement(
        'div',
        { className: className || null },
        this.renderElement(data, Template)
      );
    }
  }]);

  return Repeat;
}(_react2.default.Component);

exports.default = Repeat;


Repeat.propTypes = {
  data: _react2.default.PropTypes.array.isRequired,
  Template: _react2.default.PropTypes.any,
  className: _react2.default.PropTypes.string
};