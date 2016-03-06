'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _repeat = require('../../../elements/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _template = require('./template');

var _template2 = _interopRequireDefault(_template);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Block5 = function (_React$Component) {
  _inherits(Block5, _React$Component);

  function Block5() {
    _classCallCheck(this, Block5);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block5).apply(this, arguments));
  }

  _createClass(Block5, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data;
      var items = _props$data.items;
      var texts = _props$data.texts;

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row ' + style.pad45 },
          _react2.default.createElement(
            'h3',
            { className: style.title5 },
            texts.text1
          ),
          _react2.default.createElement(
            'h2',
            { className: style.title6 },
            texts.text2
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(_repeat2.default, { data: items, Template: _template2.default })
        )
      );
    }
  }]);

  return Block5;
}(_react2.default.Component);

exports.default = Block5;

Block5.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};