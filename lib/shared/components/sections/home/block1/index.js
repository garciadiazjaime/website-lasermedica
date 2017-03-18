'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _carousel = require('../../../elements/carousel');

var _carousel2 = _interopRequireDefault(_carousel);

var _repeat = require('../../../elements/repeat');

var _repeat2 = _interopRequireDefault(_repeat);

var _template = require('../../../templates/template1');

var _template2 = _interopRequireDefault(_template);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _locationUtil = require('../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Block1 = function (_React$Component) {
  _inherits(Block1, _React$Component);

  function Block1() {
    _classCallCheck(this, Block1);

    return _possibleConstructorReturn(this, (Block1.__proto__ || Object.getPrototypeOf(Block1)).apply(this, arguments));
  }

  _createClass(Block1, [{
    key: 'render',
    value: function render() {
      var _data$locationUtil$ge = _data2.default[_locationUtil2.default.getLang()].carousels.carousel1,
          meta = _data$locationUtil$ge.meta,
          slides = _data$locationUtil$ge.slides;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _carousel2.default,
          { data: meta },
          _react2.default.createElement(_repeat2.default, { data: slides, Template: _template2.default, className: 'carousel-inner' })
        )
      );
    }
  }]);

  return Block1;
}(_react2.default.Component);

exports.default = Block1;