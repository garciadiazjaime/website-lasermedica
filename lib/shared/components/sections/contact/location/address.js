'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Address = function (_React$Component) {
  _inherits(Address, _React$Component);

  function Address() {
    _classCallCheck(this, Address);

    return _possibleConstructorReturn(this, (Address.__proto__ || Object.getPrototypeOf(Address)).apply(this, arguments));
  }

  _createClass(Address, [{
    key: 'renderDoctors',
    value: function renderDoctors(data) {
      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item, index) {
          return _react2.default.createElement(
            'div',
            { key: index },
            _react2.default.createElement(
              _reactRouter.Link,
              { to: item.href, title: item.title },
              item.title
            )
          );
        });
      }
      return null;
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          changeLocation = _props.changeLocation,
          data = _props.data,
          locationSelected = _props.locationSelected,
          index = _props.index;
      var texts = data.texts,
          doctors = data.doctors,
          id = data.id;

      var className = locationSelected === id ? style.active : '';
      return _react2.default.createElement(
        'div',
        { className: (style.locationItem || '') + ' ' + className },
        index > 0 ? _react2.default.createElement('br', null) : null,
        _react2.default.createElement(
          'h3',
          { onClick: changeLocation, id: id },
          texts.text1
        ),
        _react2.default.createElement('i', { className: 'glyphicon glyphicon-menu-right' }),
        _react2.default.createElement(
          'h4',
          null,
          texts.text2
        ),
        _react2.default.createElement(
          'p',
          null,
          texts.text3
        ),
        _react2.default.createElement(
          'p',
          null,
          _react2.default.createElement(
            'span',
            null,
            texts.text4
          ),
          _react2.default.createElement(
            'strong',
            null,
            texts.text5
          )
        ),
        this.renderDoctors(doctors),
        index < 2 ? _react2.default.createElement('div', { className: style.borderBottom }) : null
      );
    }
  }]);

  return Address;
}(_react2.default.Component);

exports.default = Address;


Address.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  changeLocation: _react2.default.PropTypes.func.isRequired,
  locationSelected: _react2.default.PropTypes.string.isRequired,
  index: _react2.default.PropTypes.number.isRequired
};