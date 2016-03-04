'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _button = require('../../../elements/buttons/button1');

var _button2 = _interopRequireDefault(_button);

var _row = require('../../../elements/rows/row1');

var _row2 = _interopRequireDefault(_row);

var _paragraph = require('../../../elements/paragraphs/paragraph1');

var _paragraph2 = _interopRequireDefault(_paragraph);

var _wrapper = require('../../../elements/wrappers/wrapper1');

var _wrapper2 = _interopRequireDefault(_wrapper);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Footer = function (_React$Component) {
  _inherits(Footer, _React$Component);

  function Footer() {
    _classCallCheck(this, Footer);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(Footer).apply(this, arguments));
  }

  _createClass(Footer, [{
    key: 'render',
    value: function render() {
      var links = this.props.data.links;

      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(
          _wrapper2.default,
          { className: 'sr2' },
          _react2.default.createElement(
            'div',
            { className: 'container-fluid' },
            _react2.default.createElement(
              'div',
              { className: 'container-fluid' },
              _react2.default.createElement(
                _row2.default,
                { className: 'srf' },
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-2 col-sm-1' },
                  _react2.default.createElement(_button2.default, { className: 'c', href: links.link1.href, title: links.link1.title })
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-10 col-sm-7' },
                  _react2.default.createElement(
                    _paragraph2.default,
                    { className: 'g2' },
                    links.link1.title
                  )
                ),
                _react2.default.createElement(
                  'div',
                  { className: 'col-xs-12 col-sm-4' },
                  _react2.default.createElement(
                    _button2.default,
                    { className: 'g3', href: links.link2.href, title: links.link2.title },
                    links.link2.title
                  )
                )
              )
            )
          )
        ),
        this.props.children ? this.props.children : null
      );
    }
  }]);

  return Footer;
}(_react2.default.Component);

exports.default = Footer;

Footer.propTypes = {
  data: _react2.default.PropTypes.object.isRequired,
  children: _react2.default.PropTypes.any
};