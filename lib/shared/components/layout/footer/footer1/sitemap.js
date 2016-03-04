'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var style = process.env.TIER === 'FE' ? require('./style.scss') : {};

var SiteMap = function (_React$Component) {
  _inherits(SiteMap, _React$Component);

  function SiteMap() {
    _classCallCheck(this, SiteMap);

    return _possibleConstructorReturn(this, Object.getPrototypeOf(SiteMap).apply(this, arguments));
  }

  _createClass(SiteMap, [{
    key: 'getItems',
    value: function getItems(data) {
      var _this2 = this;

      var items = data.map(function (item, index) {
        var children = item.children ? _this2.getItems(item.children) : null;

        return _react2.default.createElement(
          'li',
          { key: index },
          _react2.default.createElement(
            'a',
            { href: item.url, target: '_blank' },
            item.title
          ),
          children
        );
      }, this);
      return _react2.default.createElement(
        'div',
        { className: 'row ' + style.sitemap },
        _react2.default.createElement(
          'div',
          { className: 'col-xs-12 ' + style.pad30 },
          _react2.default.createElement(
            'ul',
            null,
            items
          )
        )
      );
    }
  }, {
    key: 'render',
    value: function render() {
      return this.getItems(this.props.data);
    }
  }]);

  return SiteMap;
}(_react2.default.Component);

exports.default = SiteMap;

SiteMap.propTypes = {
  data: _react2.default.PropTypes.array.isRequired
};