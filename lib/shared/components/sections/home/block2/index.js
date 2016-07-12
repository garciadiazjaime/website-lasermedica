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
      var texts = _props$data.texts;
      var links = _props$data.links;

      return _react2.default.createElement(
        'div',
        { className: style.wr6 },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid ' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6 col-sm-offset-6' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style.wr1 },
                _react2.default.createElement(
                  'h2',
                  null,
                  texts.text1
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style.hideOverflow },
                _react2.default.createElement('div', { className: style.image1 })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3 col-xs-6' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style.wr2 },
                _react2.default.createElement(
                  'h3',
                  { className: style.title2 },
                  texts.text2
                ),
                _react2.default.createElement(
                  'p',
                  { className: style.par1 },
                  texts.text3
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { className: style.btn2, to: links.link1.href },
                  links.link1.title
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3 col-xs-6' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style.wr3 },
                _react2.default.createElement(
                  'h3',
                  { className: style.title2 },
                  texts.text4
                ),
                _react2.default.createElement(
                  'p',
                  { className: style.par1 },
                  texts.text5
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { className: style.btn2, to: links.link2.href },
                  links.link2.title
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-6 col-xs-12' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style.wr4 },
                _react2.default.createElement(
                  'h4',
                  { className: style.title3 },
                  texts.text6
                ),
                _react2.default.createElement(
                  'h3',
                  { className: style.title2 },
                  texts.text7
                ),
                _react2.default.createElement(
                  'p',
                  { className: style.par1 },
                  texts.text8
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { className: style.btn2, to: links.link3.href },
                  links.link3.title
                )
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3 col-xs-6' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style.hideOverflow },
                _react2.default.createElement('div', { className: style.image2 })
              )
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-sm-3 col-xs-6' },
              _react2.default.createElement(
                'div',
                { className: 'row ' + style.wr5 },
                _react2.default.createElement(
                  'h4',
                  { className: style.title3 },
                  texts.text9
                ),
                _react2.default.createElement(
                  'h3',
                  { className: style.title2 },
                  texts.text10
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { className: style.btn3, to: links.link4.href },
                  links.link4.title
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { className: style.btn3, to: links.link5.href },
                  links.link5.title
                ),
                _react2.default.createElement(
                  _reactRouter.Link,
                  { className: style.btn3, to: links.link6.href },
                  links.link6.title
                )
              )
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-sm-12 col-xs-12' },
              _react2.default.createElement(
                'h2',
                { className: style.title4 + ' ' + style.max_width },
                texts.text14
              )
            )
          )
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