/* eslint max-len: [2, 500, 4] */

export default {
  isRoot: true,
  title: 'DERMATOLOGÍA CLÍNICA',
  className: 'btn-service2',
  texts: [
    'En Lasermedica ofrecemos los mejores tratamientos en cuanto dermatología clínica, atendiendo enfermedades que afectan tu piel, ofreciendo su prevención, diagnóstico y tratamiento.',
    'En base a las necesidades de tu cuerpo, te podemos guiar a través de diferentes procedimientos.',
  ],
  href: '/servicios/dermatologia-clinica',
  classes: {
    class1: 'btn-service2',
  },
  children: [{
    type: 'title',
    title: 'DERMATOLOGÍA CLÍNICA',
    className: 'title-service2',
  }, {
    type: 'list',
    classes: {
      class1: 'service2',
      class2: 'btn7orange',
      class3: 'btn8orange',
    },
    texts: [
      'En Lasermedica ofrecemos los mejores tratamientos en cuanto dermatología clínica, atendiendo enfermedades que afectan tu piel, ofreciendo su prevención, diagnóstico y tratamiento.',
      'En base a las necesidades de tu cuerpo, te podemos guiar a través de diferentes procedimientos.',
    ],
    href: '/dermatologia-clinica',
    children: [{
      href: '/acne',
      title: 'Acné',
    }, {
      href: '/cicatrices-de-acne',
      title: 'Cicatrices de Acné',
    }, {
      href: '/melasma',
      title: 'Melasma',
    }, {
      href: '/psoriasis',
      title: 'Psoriasis',
    }, {
      href: '/vitiligio',
      title: 'Vitiligio',
    }, {
      href: '/verrugas-vulgares',
      title: 'Verrugas Vulgares',
    }, {
      href: '/fibromas-laxos',
      title: 'Fibromas laxos',
    }, {
      href: '/varices',
      title: 'Várices',
    }, {
      href: '/cancer-en-la-piel',
      title: 'Cáncer de Piel',
    }, {
      href: '/alopecia',
      title: 'Alopecia',
    }, {
      href: '/rosacea',
      title: 'Rosácea',
    }, {
      href: '/hiperhidrosis',
      title: 'Hiperhidrosis',
    }, {
      href: '/molusco-contagioso',
      title: 'Molusco Contagioso',
    }],
  }],
};
