'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _block = require('./block1');

var _block2 = _interopRequireDefault(_block);

var _block3 = require('./block2');

var _block4 = _interopRequireDefault(_block3);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var ContactSection = function (_React$Component) {
  _inherits(ContactSection, _React$Component);

  function ContactSection() {
    _classCallCheck(this, ContactSection);

    return _possibleConstructorReturn(this, (ContactSection.__proto__ || Object.getPrototypeOf(ContactSection)).apply(this, arguments));
  }

  _createClass(ContactSection, [{
    key: 'render',
    value: function render() {
      // todo: considered params (service, location)
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_block2.default, { data: _data2.default.block1 }),
        _react2.default.createElement(_block4.default, { data: _data2.default.block2 })
      );
    }
  }]);

  return ContactSection;
}(_react2.default.Component);

exports.default = ContactSection;