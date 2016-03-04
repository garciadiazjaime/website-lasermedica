'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reactRouter = require('react-router');

var _createBrowserHistory = require('history/lib/createBrowserHistory');

var _createBrowserHistory2 = _interopRequireDefault(_createBrowserHistory);

var _contact = require('../../components/sections/contact');

var _contact2 = _interopRequireDefault(_contact);

var _inner = require('../../components/sections/services/inner');

var _inner2 = _interopRequireDefault(_inner);

var _sitemap = require('../sitemap');

var _sitemap2 = _interopRequireDefault(_sitemap);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var items = _sitemap2.default.items;

var routes = items.children.map(function (item, index) {
  return _react2.default.createElement(_reactRouter.Route, { path: item.url, component: item.component, key: index });
});
var history = process.env.TIER === 'FE' ? (0, _createBrowserHistory2.default)() : null;

exports.default = _react2.default.createElement(
  _reactRouter.Router,
  { history: history },
  _react2.default.createElement(
    _reactRouter.Route,
    { path: '/', component: items.component },
    _react2.default.createElement(_reactRouter.IndexRoute, { component: items.default }),
    routes,
    _react2.default.createElement(_reactRouter.Route, { path: 'servicios/:category/:service', component: _inner2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'servicios/:category', component: _inner2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'contacto/:service', component: _contact2.default }),
    _react2.default.createElement(_reactRouter.Route, { path: 'ubicacion/:ubicacion', component: _contact2.default })
  )
);