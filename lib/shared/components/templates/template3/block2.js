'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _title = require('../../../elements/titles/title1');

var _title2 = _interopRequireDefault(_title);

var _paragraph = require('../../../elements/paragraphs/paragraph1');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _wrapper = require('../../../elements/wrappers/wrapper1');

var _wrapper2 = _interopRequireDefault(_wrapper);

var _button = require('../../../elements/buttons/button1');

var _button2 = _interopRequireDefault(_button);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block2 = function (_React$Component) {
  _inherits(Block2, _React$Component);

  function Block2() {
    _classCallCheck(this, Block2);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block2).apply(this, arguments));
  }

  _createClass(Block2, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data;
      var classes = _props$data.classes;
      var texts = _props$data.texts;
      var links = _props$data.links;

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              _wrapper2.default,
              { className: classes.wrapperClass },
              _react2.default.createElement(_title2.default, { className: 'c2', data: texts.text1 }),
              _react2.default.createElement(
                _button2.default,
                { className: 'd', href: links.href1, title: links.link1 },
                links.link1
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              _wrapper2.default,
              { className: 'c3' },
              _react2.default.createElement(_paragraph2.default, { className: 'h', data: texts.text2 }),
              _react2.default.createElement(
                _paragraph2.default,
                { className: 'h' },
                texts.text3
              ),
              _react2.default.createElement(
                _paragraph2.default,
                { className: 'h' },
                texts.text4
              )
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement('div', { className: 'col-xs-12 col-sm-6' }),
          _react2.default.createElement('div', { className: 'col-xs-12 col-sm-6' })
        )
      );
    }
  }]);

  return Block2;
}(_react2.default.Component);

exports.default = Block2;

Block2.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};