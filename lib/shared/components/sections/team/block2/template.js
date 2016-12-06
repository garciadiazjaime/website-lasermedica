'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _lodash = require('lodash');

var _lodash2 = _interopRequireDefault(_lodash);

var _sanitize = require('../../../../utils/sanitize');

var _sanitize2 = _interopRequireDefault(_sanitize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var Template = function (_React$Component) {
  _inherits(Template, _React$Component);

  function Template() {
    _classCallCheck(this, Template);

    return _possibleConstructorReturn(this, (Template.__proto__ || Object.getPrototypeOf(Template)).apply(this, arguments));
  }

  _createClass(Template, [{
    key: 'renderContent',
    value: function renderContent(data) {
      if (_lodash2.default.isArray(data) && data.length) {
        return data.map(function (item, index) {
          return _react2.default.createElement('p', { key: index, className: style.par2, dangerouslySetInnerHTML: (0, _sanitize2.default)(item) });
        });
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _props = this.props,
          className = _props.className,
          data = _props.data;
      var texts = data.texts,
          classes = data.classes;

      return _react2.default.createElement(
        'div',
        { className: 'row ' + style[className] },
        _react2.default.createElement('div', { className: style[classes.class1] + ' img-responsive' }),
        _react2.default.createElement(
          'div',
          { className: style.pad0_60 },
          _react2.default.createElement(
            'h2',
            { className: style.title5 },
            texts.text1
          ),
          _react2.default.createElement(
            'h3',
            { className: style.title6 },
            texts.text2
          ),
          _react2.default.createElement(
            'p',
            { className: style.paragraph3 },
            texts.text3
          ),
          this.renderContent(texts.text4)
        )
      );
    }
  }]);

  return Template;
}(_react2.default.Component);

exports.default = Template;


Template.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  className: _react2.default.PropTypes.string
};