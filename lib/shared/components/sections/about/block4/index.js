'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Block4 = function (_React$Component) {
  _inherits(Block4, _React$Component);

  function Block4() {
    _classCallCheck(this, Block4);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Block4).apply(this, arguments));
  }

  _createClass(Block4, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data;
      var texts = _props$data.texts;
      var classes = _props$data.classes;

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement('div', { className: style[classes.class1] })
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
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
              ),
              _react2.default.createElement(
                'p',
                { className: style.par2 },
                texts.text3
              ),
              _react2.default.createElement(
                'h3',
                { className: style.title5 + ' ' + style.pad0_0_50 },
                texts.text4
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-5' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'ul',
                    { className: style.bluelist },
                    _react2.default.createElement(
                      'li',
                      null,
                      texts.text5
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      texts.text6
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      texts.text7
                    )
                  )
                )
              ),
              _react2.default.createElement(
                'div',
                { className: 'col-xs-6 col-sm-5' },
                _react2.default.createElement(
                  'div',
                  { className: 'row' },
                  _react2.default.createElement(
                    'ul',
                    { className: style.bluelist },
                    _react2.default.createElement(
                      'li',
                      null,
                      texts.text8
                    ),
                    _react2.default.createElement(
                      'li',
                      null,
                      texts.text9
                    )
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Block4;
}(_react2.default.Component);

exports.default = Block4;

Block4.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};