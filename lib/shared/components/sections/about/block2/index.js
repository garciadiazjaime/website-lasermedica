'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sanitize = require('../../../../utils/sanitize');

var _sanitize2 = _interopRequireDefault(_sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Block2 = function (_React$Component) {
  _inherits(Block2, _React$Component);

  function Block2() {
    _classCallCheck(this, Block2);

    return _possibleConstructorReturn(this, (Block2.__proto__ || Object.getPrototypeOf(Block2)).apply(this, arguments));
  }

  _createClass(Block2, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          texts = _props$data.texts,
          classes = _props$data.classes;

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 ' + style.pad45 },
            _react2.default.createElement(
              'h2',
              { className: style.title5 },
              texts.text1
            ),
            _react2.default.createElement(
              'h1',
              { className: style.title6 },
              texts.text2
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row ' + style.wr6 },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6 ' + style.pad50_75_40_45 },
            _react2.default.createElement('p', { className: style.par2, dangerouslySetInnerHTML: (0, _sanitize2.default)(texts.text3) }),
            _react2.default.createElement(
              'p',
              { className: style.par2 },
              texts.text4
            ),
            _react2.default.createElement(
              'p',
              { className: style.par2 },
              texts.text5
            )
          ),
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-6' },
            _react2.default.createElement(
              'div',
              { className: 'row' },
              _react2.default.createElement('div', { className: style[classes.class1] }),
              _react2.default.createElement(
                'p',
                { className: style.paragraph3 },
                texts.text6,
                _react2.default.createElement('br', null),
                texts.text7
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