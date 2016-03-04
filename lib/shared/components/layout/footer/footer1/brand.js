'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var FooterTop = function (_React$Component) {
  _inherits(FooterTop, _React$Component);

  function FooterTop() {
    _classCallCheck(this, FooterTop);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterTop).apply(this, arguments));
  }

  _createClass(FooterTop, [{
    key: 'render',
    value: function render() {
      var fbLink = 'https://www.facebook.com/InterbrokersSeguros/';
      return _react2.default.createElement(
        'div',
        { className: 'row ' + style.brand },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-sm-8' },
          _react2.default.createElement(
            'div',
            { className: style.pad45 },
            _react2.default.createElement(_reactRouter.Link, { className: style.logo, to: '/inicio' })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 col-sm-4' },
          _react2.default.createElement(
            'a',
            { className: style.facebook, href: fbLink, title: 'Lasermedica en Facebook', target: '_blank' },
            'Síguenos en'
          )
        )
      );
    }
  }]);

  return FooterTop;
}(_react2.default.Component);

exports.default = FooterTop;