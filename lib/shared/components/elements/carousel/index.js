'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */

var style = process.env.TIER === 'FE' ? require('../../../theme/carousels/carousels.scss') : {};

var Carousel1 = function (_React$Component) {
  _inherits(Carousel1, _React$Component);

  function Carousel1() {
    _classCallCheck(this, Carousel1);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel1).apply(this, arguments));
  }

  _createClass(Carousel1, [{
    key: 'renderIndicators',
    value: function renderIndicators(data, sliderID, className) {
      if (_lodash2.default.isArray(data) && data.length) {
        var bullets = data.map(function (slide, index) {
          var itemClassName = index === 0 ? 'active' : null;
          return _react2.default.createElement('li', { 'data-target': '#' + sliderID, 'data-slide-to': index, key: index, className: itemClassName });
        }, this);
        return _react2.default.createElement(
          'ol',
          { className: 'carousel-indicators ' + style[className] },
          bullets
        );
      }
      return null;
    }
  }, {
    key: 'renderControls',
    value: function renderControls(data, sliderID, className) {
      return _react2.default.createElement(
        'div',
        { className: style[className] },
        _react2.default.createElement(
          'a',
          { className: 'left carousel-control', href: '#' + sliderID, role: 'button', 'data-slide': 'prev' },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Previous'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: 'right carousel-control', href: '#' + sliderID, role: 'button', 'data-slide': 'next' },
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Next'
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      var _props$data = this.props.data;
      var sliderID = _props$data.sliderID;
      var interval = _props$data.interval;
      var indicators = _props$data.indicators;
      var controls = _props$data.controls;

      var slides = this.props.children.props.data;
      return _react2.default.createElement(
        'div',
        { id: sliderID, className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': interval },
        indicators.status ? this.renderIndicators(slides, sliderID, indicators.className) : null,
        this.props.children,
        controls.status ? this.renderControls(slides, sliderID, controls.className) : null
      );
    }
  }]);

  return Carousel1;
}(_react2.default.Component);

exports.default = Carousel1;

Carousel1.propTypes = {
  data: _react2.default.PropTypes.shape({
    sliderID: _react2.default.PropTypes.string.isRequired,
    interval: _react2.default.PropTypes.number.isRequired,
    indicators: _react2.default.PropTypes.shape({
      status: _react2.default.PropTypes.bool.isRequired,
      className: _react2.default.PropTypes.string
    }),
    controls: _react2.default.PropTypes.shape({
      status: _react2.default.PropTypes.bool.isRequired,
      className: _react2.default.PropTypes.string
    })
  }),
  children: _react2.default.PropTypes.any
};