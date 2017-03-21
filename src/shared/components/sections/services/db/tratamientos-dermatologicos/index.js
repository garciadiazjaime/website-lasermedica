/* eslint max-len: [2, 500, 4] */

export default {
  ES: {
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
        href: '/tratamiento-celulitis',
        title: 'Tratamiento de Celulitis',
      }, {
        href: '/eliminacion-tatuajes',
        title: 'Eliminación de Tatuajes',
      }, {
        href: '/tratamiento-cicatrices-queloides',
        title: 'Tratamiento de Cicatrices Queloides',
      }, {
        href: '/cirugia-dermatologica',
        title: 'Cirugía Dermatológica',
      }],
    }],
  },
  EN: {
    isRoot: true,
    title: 'Dermatological Treatments',
    className: 'btn-service3',
    description: 'Portafolio de seguros para <b>Vehiculos Comerciales.</b> Cobertura en México y USA.',
    href: '/services/treatments-dermatological',
    children: [{
      type: 'title',
      title: 'DERMATOLOGICAL TREATMENTS',
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
      href: '/treatments-dermatological',
      children: [{
        href: '/rejuvenation',
        title: 'Rejuvenation',
      }, {
        href: '/cellulite-treatment',
        title: 'Cellulite Treatment',
      }, {
        href: '/tattoo-removal',
        title: 'Tattoo Removal',
      }, {
        href: '/treatment-keloid',
        title: 'Treatment of Keloid',
      }, {
        href: '/dermatologic-surgery',
        title: 'Dermatologic Surgery',
      }],
    }],
  },
};
