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

var Powered = function (_React$Component) {
  _inherits(Powered, _React$Component);

  function Powered() {
    _classCallCheck(this, Powered);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Powered).apply(this, arguments));
  }

  _createClass(Powered, [{
    key: 'render',
    value: function render() {
      var data = [{
        name: 'POOL',
        url: 'http://somospool.com',
        title: 'somos pool'
      }, {
        name: 'MINT',
        url: 'http://mintitmedia.com',
        title: 'Diseño y Desarrollo Web en Tijuana'
      }];

      return _react2.default.createElement(
        'div',
        { className: style.powered },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              'Todos los derechos reservados © Lasermedica'
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-6' },
              'Un proyecto de: ',
              _react2.default.createElement(
                'a',
                { href: data[0].url, title: data[0].title, target: '_blank' },
                data[0].name
              ),
              '   Código por: ',
              _react2.default.createElement(
                'a',
                { href: data[1].url, title: data[1].title, target: '_blank' },
                data[1].name
              )
            )
          )
        )
      );
    }
  }]);

  return Powered;
}(_react2.default.Component);

exports.default = Powered;