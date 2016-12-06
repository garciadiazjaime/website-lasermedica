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

var HomeCarouselTemplate = function (_React$Component) {
  _inherits(HomeCarouselTemplate, _React$Component);

  function HomeCarouselTemplate() {
    _classCallCheck(this, HomeCarouselTemplate);

    return _possibleConstructorReturn(this, (HomeCarouselTemplate.__proto__ || Object.getPrototypeOf(HomeCarouselTemplate)).apply(this, arguments));
  }

  _createClass(HomeCarouselTemplate, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data,
          title = _props$data.title,
          href = _props$data.href,
          className = _props$data.className;


      return _react2.default.createElement(
        'div',
        { className: 'col-sm-3 col-xs-12' },
        _react2.default.createElement(
          'div',
          { className: 'row ' + style.wr7 },
          _react2.default.createElement('div', { className: style[className] }),
          _react2.default.createElement(
            _reactRouter.Link,
            { to: href, title: title, className: style.btn5 },
            _react2.default.createElement(
              'span',
              null,
              title
            )
          )
        )
      );
    }
  }]);

  return HomeCarouselTemplate;
}(_react2.default.Component);

exports.default = HomeCarouselTemplate;


HomeCarouselTemplate.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  index: _react2.default.PropTypes.number.isRequired
};