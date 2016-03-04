'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _db = require('./db');

var _db2 = _interopRequireDefault(_db);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
  block1: {
    texts: {
      text1: 'Tratamientos de Alta Tecnología'
    },
    classes: {
      class1: 'servicios-banner'
    },
    links: {
      link1: {
        title: 'Nuestros Servicios',
        href: '/servicios'
      }
    }
  },
  services: _db2.default
}; /* eslint max-len: [2, 600, 4] */