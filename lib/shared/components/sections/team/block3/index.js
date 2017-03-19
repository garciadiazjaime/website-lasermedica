'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _data = require('./data');

var _data2 = _interopRequireDefault(_data);

var _locationUtil = require('../../../../utils/locationUtil');

var _locationUtil2 = _interopRequireDefault(_locationUtil);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Block3 = function (_React$Component) {
  _inherits(Block3, _React$Component);

  function Block3() {
    _classCallCheck(this, Block3);

    return _possibleConstructorReturn(this, (Block3.__proto__ || Object.getPrototypeOf(Block3)).apply(this, arguments));
  }

  _createClass(Block3, [{
    key: 'render',
    value: function render() {
      var texts = _data2.default[_locationUtil2.default.getLang()].texts;

      return _react2.default.createElement(
        'div',
        { className: style.blockWrapper1 },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: 'row' },
            _react2.default.createElement(
              'div',
              { className: 'col-xs-12 col-sm-8 col-sm-offset-2 ' + style.heightFixer },
              _react2.default.createElement(
                'h2',
                { className: style.title8 },
                texts.text1
              )
            )
          )
        )
      );
    }
  }]);

  return Block3;
}(_react2.default.Component);

exports.default = Block3;