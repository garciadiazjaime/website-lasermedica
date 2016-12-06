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

var MainMenu = function (_React$Component) {
  _inherits(MainMenu, _React$Component);

  function MainMenu() {
    _classCallCheck(this, MainMenu);

    return _possibleConstructorReturn(this, (MainMenu.__proto__ || Object.getPrototypeOf(MainMenu)).apply(this, arguments));
  }

  _createClass(MainMenu, [{
    key: 'getItems',
    value: function getItems(data) {
      var _this2 = this;

      return data.map(function (item, index) {
        var title = item.title,
            url = item.url;

        var elementID = url.replace('/', '');
        var className = style.navbarNavAnchor;
        var onClick = _this2.props.onClick;

        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(
            _reactRouter.Link,
            { to: url, className: className, id: elementID, onClick: onClick },
            title
          )
        );
      });
    }
  }, {
    key: 'getIcons',
    value: function getIcons(data) {
      return data.map(function (item, index) {
        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement('a', { href: item.url, className: style[item.title], id: item.url, target: '_blank' })
        );
      });
    }
  }, {
    key: 'render',
    value: function render() {
      /*eslint-disable */
      return _react2.default.createElement(
        'nav',
        { className: style.navbarDefault + ' navbar navbar-default', id: 'menu_wrapper' },
        _react2.default.createElement(
          'div',
          { className: 'container-fluid' },
          _react2.default.createElement(
            'div',
            { className: style.navbarHeader + ' navbar-header' },
            _react2.default.createElement(
              'button',
              { type: 'button', className: 'navbar-toggle collapsed menu_trigger', 'data-toggle': 'collapse', 'data-target': '#mainmenu', 'aria-expanded': 'false' },
              _react2.default.createElement(
                'span',
                { className: 'sr-only' },
                'Toggle navigation'
              ),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' }),
              _react2.default.createElement('span', { className: 'icon-bar' })
            ),
            _react2.default.createElement(_reactRouter.Link, { className: style.navbarBrand + ' navbar-brand', to: '/inicio' })
          ),
          _react2.default.createElement(
            'div',
            { className: style.navbarCollapse + ' collapse navbar-collapse', id: 'mainmenu' },
            _react2.default.createElement(
              'ul',
              { className: style.socialNetwork },
              this.getIcons(this.props.icons)
            ),
            _react2.default.createElement(
              'ul',
              { className: style.navbarNav + ' nav navbar-nav' },
              this.getItems(this.props.items)
            )
          )
        )
      );
      /*eslint-enable */
    }
  }]);

  return MainMenu;
}(_react2.default.Component);

exports.default = MainMenu;


MainMenu.propTypes = {
  items: _react2.default.PropTypes.array.isRequired,
  icons: _react2.default.PropTypes.array,
  location: _react2.default.PropTypes.any,
  onClick: _react2.default.PropTypes.func.isRequired
};