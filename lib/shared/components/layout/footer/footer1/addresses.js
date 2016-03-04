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

var Addresses = function (_React$Component) {
  _inherits(Addresses, _React$Component);

  function Addresses() {
    _classCallCheck(this, Addresses);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Addresses).apply(this, arguments));
  }

  _createClass(Addresses, [{
    key: 'renderAddress',
    value: function renderAddress(item, index) {
      return _react2.default.createElement(
        'div',
        { className: style.addresses + ' col-xs-12 col-sm-3', key: index },
        _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'h4',
            null,
            item.title
          ),
          _react2.default.createElement(
            'p',
            null,
            item.tel
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      var itemsEl = this.props.data.map(function (item, index) {
        return _this2.renderAddress(item, index);
      });

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'div',
          { className: 'row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12' },
            _react2.default.createElement(
              _reactRouter.Link,
              { className: style.contactBlock, to: 'contacto', title: 'Contáctanos' },
              'Contáctanos'
            )
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'row' },
          itemsEl
        )
      );
    }
  }]);

  return Addresses;
}(_react2.default.Component);

exports.default = Addresses;

Addresses.propTypes = {
  data: _react2.default.PropTypes.array
};