'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _dermatologiaCosmetica = require('./dermatologia-cosmetica');

var _dermatologiaCosmetica2 = _interopRequireDefault(_dermatologiaCosmetica);

var _dermatologiaClinica = require('./dermatologia-clinica');

var _dermatologiaClinica2 = _interopRequireDefault(_dermatologiaClinica);

var _tratamientosDermatologicos = require('./tratamientos-dermatologicos');

var _tratamientosDermatologicos2 = _interopRequireDefault(_tratamientosDermatologicos);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = [_dermatologiaCosmetica2.default, _dermatologiaClinica2.default, _tratamientosDermatologicos2.default];