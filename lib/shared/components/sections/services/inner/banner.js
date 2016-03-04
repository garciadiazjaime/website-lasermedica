'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _title = require('../../../elements/titles/title1');

var _title2 = _interopRequireDefault(_title);

var _paragraph = require('../../../elements/paragraphs/paragraph1');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _row = require('../../../elements/rows/row1');

var _row2 = _interopRequireDefault(_row);

var _wrapper = require('../../../elements/wrappers/wrapper1');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Banner = function (_React$Component) {
  _inherits(Banner, _React$Component);

  function Banner() {
    _classCallCheck(this, Banner);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Banner).apply(this, arguments));
  }

  _createClass(Banner, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data;
      var texts = _props$data.texts;
      var classes = _props$data.classes;

      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          _row2.default,
          { className: classes.class2 },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-12 col-sm-8' },
            _react2.default.createElement(
              _wrapper2.default,
              { className: 'c2' },
              _react2.default.createElement(
                _title2.default,
                { className: classes.class1 },
                texts.text1
              ),
              _react2.default.createElement(
                _title2.default,
                { className: 'h' },
                texts.text2
              ),
              _react2.default.createElement(
                'div',
                { className: 'row' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 col-sm-9' },
                  _react2.default.createElement(
                    _paragraph2.default,
                    { className: 'd' },
                    texts.text3
                  )
                )
              )
            )
          )
        )
      );
    }
  }]);

  return Banner;
}(_react2.default.Component);

exports.default = Banner;

Banner.propTypes = {
  data: _react2.default.PropTypes.object.isRequired
};