/* eslint max-len: [2, 500, 4] */

export default {
  isRoot: false,
  title: '',
  description: '',
  href: 'servicios/tramites',
  className: '',
  children: [{
    type: 'subtitle',
    title: 'Placas',
    className: 'sc',
  }, {
    type: 'list',
    className: 'sl3',
    title: 'DMV',
    subtitle: '(Commercial Registrations)',
    href: 'placas-dmv',
    children: [{
      title: 'California',
      href: 'california',
    }, {
      title: 'Interstate Registration (IRP) (Apportioned)',
      href: 'intersate-registration-irp-apportioned',
    }, {
      title: 'Titles',
      href: 'titles',
    }],
  }, {
    type: 'list',
    className: 'sl4',
    title: 'SCT',
    subtitle: '(Transfers, Estatales, Federales)',
    href: 'placas-sct',
    children: [{
      title: 'Registro Nuevo',
      href: 'registro-nuevo',
    }, {
      title: '(Transfers,Estatales y Federales)',
      href: 'transfers-estatales-federales',
    }, {
      title: 'Registro Nuevo Transfronterizo',
      href: 'registro-nuevo-transfronterizo',
    }, {
      title: 'Renovaciones',
      href: 'renovaciones',
    }, {
      title: 'Altas de Unidad',
      href: 'altas-unidad',
    }, {
      title: 'Bajas de Unidad',
      href: 'bajas-unidad',
    }],
  }],
};
