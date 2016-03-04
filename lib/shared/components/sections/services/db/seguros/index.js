'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint max-len: [2, 500, 4] */

exports.default = {
  isRoot: true,
  title: 'Seguros',
  description: 'Portafolio de seguros para <b>Vehiculos Comerciales.</b> Cobertura en México y USA.',
  href: 'servicios/seguros',
  className: 'w3',
  children: [{
    type: 'title',
    title: 'Seguros para Vehículos Comerciales',
    className: 'sc3'
  }, {
    type: 'list',
    className: 'sl7',
    title: 'Seguros con <br />cobertura en <br />USA',
    href: 'seguros-usa',
    children: [{
      title: 'Liability Truck',
      href: 'liability-truck'
    }, {
      title: 'Cargo Insurance',
      href: 'cargo-insurance'
    }, {
      title: 'Trailer Interchange',
      href: 'trailer-interchange'
    }, {
      title: 'Physical Damage',
      href: 'physical-damage'
    }, {
      title: 'General Liability',
      href: 'general-liability'
    }]
  }, {
    type: 'list',
    className: 'sl8',
    title: 'Seguros con <br /> cobertura en <br />México',
    href: 'seguros-mx',
    children: [{
      title: 'Responsabilidad Civil a Terceros',
      href: 'responsabilidad-civil-terceros'
    }, {
      title: 'Daños Fisicos (Cobertura Amplia)',
      href: 'danos-fisicos-cobertura-amplia'
    }, {
      title: 'Seguro de Mercancias',
      href: 'seguro-mercancias'
    }, {
      title: 'Accidentes Personales',
      href: 'accidentes-personales'
    }]
  }]
};