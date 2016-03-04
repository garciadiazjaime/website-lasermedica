'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _sitemap = require('../config/sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

var _menu = require('./layout/menu/menu1');

var _menu2 = _interopRequireDefault(_menu);

var _footer = require('./layout/footer/footer1');

var _footer2 = _interopRequireDefault(_footer);

var _menu3 = require('./layout/menu/menu2');

var _menu4 = _interopRequireDefault(_menu3);

var _scroll = require('../utils/scroll');

var _scroll2 = _interopRequireDefault(_scroll);

var _menu5 = require('../utils/menu');

var _menu6 = _interopRequireDefault(_menu5);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var AppHandler = function (_React$Component) {
  _inherits(AppHandler, _React$Component);

  function AppHandler() {
    _classCallCheck(this, AppHandler);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(AppHandler).apply(this, arguments));
  }

  _createClass(AppHandler, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      this.scrollHandler(true);
      window.addEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate() {
      this.scrollHandler();
    }
  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      window.removeEventListener('scroll', this.onScroll, false);
    }
  }, {
    key: 'onScroll',
    value: function onScroll() {
      var offset = window.pageYOffset;
      if (offset > 186) {
        $('#menu_wrapper').addClass('navbar-fixed-top');
      } else {
        $('#menu_wrapper').removeClass('navbar-fixed-top');
      }
    }
  }, {
    key: 'scrollHandler',
    value: function scrollHandler(isFirstTime) {
      var location = this.props.location;

      (0, _scroll2.default)(location);
      if (!isFirstTime) {
        var bits = location.pathname.split('/');
        (0, _menu6.default)(bits[1] || 'inicio');
      }
    }
  }, {
    key: 'clickHandler',
    value: function clickHandler() {
      if ($('.navbar-header button').is(':visible')) {
        $('.navbar-header button').click();
      }
    }
  }, {
    key: 'render',
    value: function render() {
      return _react2.default.createElement(
        'div',
        null,
        _react2.default.createElement(_menu2.default, { items: _sitemap2.default.items.children, icons: _sitemap2.default.icons, onClick: this.clickHandler }),
        this.props.children,
        _react2.default.createElement(_footer2.default, { items: _sitemap2.default.items.children, addresses: _sitemap2.default.addresses }),
        _react2.default.createElement(_menu4.default, null)
      );
    }
  }]);

  return AppHandler;
}(_react2.default.Component);

exports.default = AppHandler;

AppHandler.propTypes = {
  children: _react2.default.PropTypes.object.isRequired,
  location: _react2.default.PropTypes.any
};