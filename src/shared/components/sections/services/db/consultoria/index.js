/* eslint max-len: [2, 500, 4] */

export default {
  isRoot: true,
  title: 'Consultoría',
  description: 'Programa de Servicio de Auditorías (México y USA)',
  href: 'servicios/consultoria',
  className: 'w4',
  children: [{
    type: 'title',
    title: 'Consultoría',
    className: 'sc4',
  }, {
    type: 'list',
    className: 'sl9',
    title: 'Consultoría y Servicio de Auditorías (México y USA)',
    href: 'mx-usa',
    children: [{
      title: 'Apoyo para pre-auditorias',
      href: 'apoyo-preauditorias',
    }, {
      title: 'Apoyo durante la Auditoría',
      href: 'apoyo-durante-auditoria',
    }, {
      title: 'Apoyo posterior a la Auditoría',
      href: 'apoyo-posterior-auditoria',
    }],
  }],
};
