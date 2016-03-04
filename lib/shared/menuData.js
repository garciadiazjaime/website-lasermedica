'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppHandler = require('./components/AppHandler');

var _AppHandler2 = _interopRequireDefault(_AppHandler);

var _home = require('./components/sections/home');

var _home2 = _interopRequireDefault(_home);

var _about = require('./components/sections/about');

var _about2 = _interopRequireDefault(_about);

var _services = require('./components/sections/services');

var _services2 = _interopRequireDefault(_services);

var _contact = require('./components/sections/contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  items: {
    component: _AppHandler2.default,
    default: _home2.default,
    children: [{
      title: 'Inicio',
      url: '/inicio',
      component: _home2.default
    }, {
      title: 'Nosotros',
      url: '/nosotros',
      component: _about2.default
    }, {
      title: 'Servicios',
      url: '/servicios',
      component: _services2.default
    }, {
      title: 'Contacto',
      url: '/contacto',
      component: _contact2.default
    }]
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/'
  }],
  addresses: [{
    id: 'google',
    title: 'Mountain View',
    location: '1600 Amphitheatre Parkway Mountain View, CA 94043',
    gmaps: 'https://www.maps.google.com/',
    tels: '1 650-253-0000'
  }]
};