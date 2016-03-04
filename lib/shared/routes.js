'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _menuData = require('./menuData');

var _menuData2 = _interopRequireDefault(_menuData);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = _menuData2.default.items;

var routes = items.children.map(function (item, index) {
  return _react2.default.createElement(_reactRouter.Route, { path: item.url, component: item.component, key: index });
});
var history = process.env.NODE_ENV === 'DEV' ? (0, _createBrowserHistory2.default)() : null;

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: history },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: items.component },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: items.default }),
    routes
  )
);