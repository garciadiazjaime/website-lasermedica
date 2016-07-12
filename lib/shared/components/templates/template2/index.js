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

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /* eslint max-len: [2, 500, 4] */

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

// **************** Banner used on sections

var Template2 = function (_React$Component) {
  _inherits(Template2, _React$Component);

  function Template2() {
    _classCallCheck(this, Template2);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Template2).apply(this, arguments));
  }

  _createClass(Template2, [{
    key: 'render',
    value: function render() {
      var _props$data = this.props.data;
      var classes = _props$data.classes;
      var texts = _props$data.texts;
      var links = _props$data.links;


      return _react2.default.createElement(
        'div',
        { className: 'container-fluid' },
        _react2.default.createElement(
          'div',
          { className: style[classes.class1] + ' row' },
          _react2.default.createElement(
            'div',
            { className: 'col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-10px col-md-10-offset-1 ' + style.heightFix },
            _react2.default.createElement(
              'div',
              { className: style.vCenterRel },
              _react2.default.createElement(
                'h1',
                { className: style.title7 },
                texts.text1
              ),
              _react2.default.createElement(
                _reactRouter.Link,
                { to: links.link1.href, title: links.link1.title, className: style.btn1 },
                links.link1.title
              )
            )
          )
        )
      );
    }
  }]);

  return Template2;
}(_react2.default.Component);

exports.default = Template2;


Template2.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  index: _react2.default.PropTypes.number
};