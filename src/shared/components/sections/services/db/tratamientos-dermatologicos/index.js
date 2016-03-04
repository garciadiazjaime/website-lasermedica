/* eslint max-len: [2, 500, 4] */

export default {
  isRoot: true,
  title: 'Tratamientos Dermatológicos',
  className: 'btn-service3',
  description: 'Portafolio de seguros para <b>Vehiculos Comerciales.</b> Cobertura en México y USA.',
  href: '/servicios/tratamientos-dermatologicos',
  children: [{
    type: 'title',
    title: 'TRATAMIENTOS DERMATOLÓGICOS',
    className: 'title-service3',
  }, {
    type: 'list',
    classes: {
      class1: 'service3',
      class2: 'btn7green',
      class3: 'btn8green',
    },
    texts: [
      'En Lasermedica mejoramos la apariencia de tu piel; nuestro objetivo es que nuestros pacientes luzcan una piel saludable y radiante.',
      'En base a las necesidades de tu piel, te podemos guiar a través de diferentes procedimientos.',
    ],
    href: '/tratamientos-dermatologicos',
    children: [{
      href: '/rejuvenecimiento',
      title: 'Rejuvenecimiento',
    }, {
      href: '/reafirmación-de-la-piel',
      title: 'Reafirmación de la Piel',
    }, {
      href: '/remocion-cicatrices',
      title: 'Remoción: Cicatrices',
    }],
  }],
};
