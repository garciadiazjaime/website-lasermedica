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

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


var Services = function (_React$Component) {
  _inherits(Services, _React$Component);

  function Services() {
    _classCallCheck(this, Services);

    return _possibleConstructorReturn(this, (Services.__proto__ || Object.getPrototypeOf(Services)).apply(this, arguments));
  }

  _createClass(Services, [{
    key: 'renderServices',
    value: function renderServices(items) {
      // const className = items.length > 5 ? 'col-sm-6' : 'col-sm-12';
      return items.map(function (service, index) {
        return _react2.default.createElement(
          'div',
          { className: 'col-sm-4', key: index },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: service.href, title: service.title },
            service.title
          )
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var data = this.props.data;


      return _react2.default.createElement(
        'div',
        { className: 'col-sm-9' },
        _react2.default.createElement(
          'div',
          { className: 'row' },
          this.renderServices(data.items)
        )
      );
    }
  }]);

  return Services;
}(_react2.default.Component);

exports.default = Services;


Services.propTypes = {
  data: _react2.default.PropTypes.array.isRequired
};