'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _card = require('./card');

var _card2 = _interopRequireDefault(_card);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Carousel1 = function (_Component) {
  _inherits(Carousel1, _Component);

  function Carousel1(props) {
    _classCallCheck(this, Carousel1);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Carousel1).call(this, props));
  }

  _createClass(Carousel1, [{
    key: 'getSlides',
    value: function getSlides(slides, classes) {
      var _this2 = this;

      if (_lodash2.default.isArray(slides) && slides.length) {
        return slides.map(function (slide, index) {
          var activeState = _this2.getActiveState(index);
          var itemClasses = 'item ' + activeState + ' ' + (classes.item || '');
          var wrapperInner = slide.wrapperInner ? slide.wrapperInner.style : null;

          return _react2.default.createElement(
            'div',
            { className: itemClasses, key: index, style: slide.wrapper.style },
            _react2.default.createElement(
              'div',
              { className: 'container', style: wrapperInner },
              _react2.default.createElement(
                'div',
                { className: classes.wrapperElement || '' },
                _react2.default.createElement(_card2.default, { data: slide.card })
              )
            )
          );
        }, this);
      }
      return null;
    }
  }, {
    key: 'getIndicators',
    value: function getIndicators(data, cID, iS) {
      var _this3 = this;

      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (slide, i) {
          var s = _this3.getActiveState(i);
          return _react2.default.createElement('li', { 'data-target': cID, 'data-slide-to': i, key: i, className: s, style: iS });
        }, this);
      }

      return null;
    }
  }, {
    key: 'getActiveState',
    value: function getActiveState(index) {
      return index === 0 ? 'active' : null;
    }
  }, {
    key: 'getControls',
    value: function getControls(meta, carouselID) {
      var ArrowStyle = {
        leftArrow: _lodash2.default.merge({}, meta.arrowLeft, {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)'
        }),
        rightArrow: _lodash2.default.merge({}, meta.arrowRight, {
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translateY(-50%) translateX(-50%)'
        })
      };

      var leftClasses = 'left carousel-control';
      var rightClasses = 'right carousel-control';
      var href = '#' + carouselID;
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          'a',
          { className: leftClasses, href: href, role: 'button', 'data-slide': 'prev', style: meta.style },
          _react2.default.createElement('div', { style: ArrowStyle.leftArrow, 'aria-hidden': 'true' }),
          _react2.default.createElement(
            'span',
            { className: 'sr-only' },
            'Previous'
          )
        ),
        _react2.default.createElement(
          'a',
          { className: rightClasses, href: href, role: 'button', 'data-slide': 'next', style: meta.style },
          _react2.default.createElement('div', { style: ArrowStyle.rightArrow, 'aria-hidden': 'true' }),
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
      var data = this.props.data;
      var slides = data.slides;
      var meta = data.meta;

      var sliderID = data.meta.id;

      var slidesEl = this.getSlides(slides, data.classes);
      var controlsEl = meta.showControl !== false ? this.getControls(meta, meta.id) : null;
      var indicatorsEl = meta.showIndicators !== false ? this.getIndicators(slides, meta.id, meta.indicators) : null;

      var interval = data.meta.interval ? data.meta.interval : 8000;

      return _react2.default.createElement(
        'div',
        { id: sliderID, className: 'carousel slide', 'data-ride': 'carousel', 'data-interval': interval },
        _react2.default.createElement(
          'ol',
          { className: 'carousel-indicators' },
          indicatorsEl
        ),
        _react2.default.createElement(
          'div',
          { className: data.classes.carouselInner + ' carousel-inner', role: 'listbox' },
          slidesEl
        ),
        controlsEl
      );
    }
  }]);

  return Carousel1;
}(_react.Component);

exports.default = Carousel1;

Carousel1.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};