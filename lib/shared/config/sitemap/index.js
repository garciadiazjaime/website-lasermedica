'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _AppHandler = require('../../components/AppHandler');

var _AppHandler2 = _interopRequireDefault(_AppHandler);

var _home = require('../../components/sections/home');

var _home2 = _interopRequireDefault(_home);

var _about = require('../../components/sections/about');

var _about2 = _interopRequireDefault(_about);

var _team = require('../../components/sections/team');

var _team2 = _interopRequireDefault(_team);

var _services = require('../../components/sections/services');

var _services2 = _interopRequireDefault(_services);

var _contact = require('../../components/sections/contact');

var _contact2 = _interopRequireDefault(_contact);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  items: {
    component: _AppHandler2.default,
    default: _home2.default,
    children: [{
      title: 'Inicio',
      url: '/inicio',
      lang: 'ES',
      component: _home2.default
    }, {
      title: 'Home',
      url: '/home',
      lang: 'EN',
      component: _home2.default
    }, {
      title: 'La Clínica',
      url: '/nosotros',
      lang: 'ES',
      component: _about2.default
    }, {
      title: 'About US',
      url: '/aboutus',
      lang: 'EN',
      component: _about2.default
    }, {
      title: 'Equipo',
      url: '/equipo',
      lang: 'ES',
      component: _team2.default
    }, {
      title: 'Team',
      url: '/team',
      lang: 'EN',
      component: _team2.default
    }, {
      title: 'Servicios',
      url: '/servicios',
      lang: 'ES',
      component: _services2.default
    }, {
      title: 'Services',
      url: '/services',
      lang: 'EN',
      component: _services2.default
    }, {
      title: 'Contacto',
      url: '/contacto',
      lang: 'ES',
      component: _contact2.default
    }, {
      title: 'Contact',
      url: '/contact',
      lang: 'EN',
      component: _contact2.default
    }]
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/LaserMedicaDermatologia'
  }],
  addresses: [{
    title: 'Tijuana',
    tel: '(664) 634-1615 / 684-7425'
  }, {
    title: 'Mexicali',
    tel: '(686) 552-3672'
  }, {
    title: 'Ensenada',
    tel: '(686) 552-3672'
  }, {
    title: 'Farmacia de la Piel',
    tel: '(664) 684-8288'
  }]
};