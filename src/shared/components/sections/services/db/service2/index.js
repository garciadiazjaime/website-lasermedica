/* eslint max-len: [2, 500, 4] */

export default {
  isRoot: true,
  title: 'DERMATOLOGÍA CLINICA',
  description: 'Permisos para Vehículos Comerciales en USA y <strong>Nuevos Entrantes</strong>',
  href: '/servicios/dermatologia-clinica',
  className: 'w2',
  children: [{
    type: 'title',
    title: 'Permisos',
    className: 'sc2',
  }, {
    type: 'list',
    className: 'sl5',
    title: 'Permisos <br />en USA',
    href: 'permisos-usa',
    children: [{
      title: 'Licencia sobre Impuesto Diesel',
      href: 'licencia-sobre-impuesto-diesel',
    }, {
      title: 'Diesel-Interstate User Diesel Fuel Tax Return',
      href: 'diesel-interstate-user-fuel-tax-return',
    }, {
      title: 'IFTA-International Fuel Tax Agreement',
      href: 'ifta-international-fuel-tax-agreement',
    }, {
      title: 'CA Number',
      href: 'ca-number',
    }],
  }, {
    type: 'list',
    className: 'sl6',
    title: 'Nuevo <br />entrante',
    href: 'permisos-otros',
    children: [{
      title: 'MC Enterprise',
      href: 'mc-enterprise',
    }, {
      title: 'MC',
      href: 'mc',
    }, {
      title: 'MX Op2',
      href: 'mx-op2',
    }, {
      title: 'MX Op1',
      href: 'mx-op1',
    }, {
      title: 'DOT Number',
      href: 'dot-number',
    }],
  }],
};
