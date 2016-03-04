'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _brand = require('./brand');

var _brand2 = _interopRequireDefault(_brand);

var _powered = require('./powered');

var _powered2 = _interopRequireDefault(_powered);

var _addresses = require('./addresses');

var _addresses2 = _interopRequireDefault(_addresses);

var _sitemap = require('./sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

var _services = require('./services');

var _services2 = _interopRequireDefault(_services);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var FooterAAA = function (_React$Component) {
  _inherits(FooterAAA, _React$Component);

  function FooterAAA() {
    _classCallCheck(this, FooterAAA);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(FooterAAA).apply(this, arguments));
  }

  _createClass(FooterAAA, [{
    key: 'render',
    value: function render() {
      var addresses = this.props.addresses;

      return _react2.default.createElement(
        'div',
        { className: style.footerWrapper },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(_brand2.default, null),
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-2' },
              _react2.default.createElement(_sitemap2.default, { data: this.props.items })
            ),
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-10' },
              _react2.default.createElement(_services2.default, null),
              _react2.default.createElement(_addresses2.default, { data: addresses })
            )
          )
        ),
        _react2.default.createElement(_powered2.default, null)
      );
    }
  }]);

  return FooterAAA;
}(_react2.default.Component);

exports.default = FooterAAA;

FooterAAA.propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  addresses: _react2.default.PropTypes.array
};