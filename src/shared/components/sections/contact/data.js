/* eslint max-len: [2, 600, 4] */

export default {
  block1: {
    texts: {
      text1: 'Contáctanos',
      text2: 'Para cualquier duda o comentario, contáctanos, te responderemos lo más pronto posible.',
      text3: 'Nombre',
      text4: 'Correo',
      text5: 'Para: Tijuana',
      text6: 'Mensaje',
      text7: 'Solicita una cita',
      text8: 'Si estas interesado en agendar una cita con nosotros, completa la forma e incluye el procedimiento y fecha de interes y nos pondremos en contacto contigo para confirmar tu lugar.',
      text9: 'Nombre',
      text10: 'Correo',
      text11: 'Teléfono',
      text12: 'Para: Tijuana',
      text13: 'Fecha',
      text14: 'Procedimiento de Interés',
    },
    links: {
      link1: {
        href: '',
        title: 'ENVIAR',
      },
      link2: {
        href: '',
        title: 'AGENDAR CITA',
      },
    },
  },

  block2: {
    texts: {
      text1: 'Ubicaciones',
    },
    maps: {
      locationTijuana: {
        className: 'location1',
        href: '#',
      },
      locationMexicali: {
        className: 'location2',
        href: '#',
      },
      locationEnsenada: {
        className: 'location3',
        href: '#',
      },
    },
    locations: [{
      id: 'locationTijuana',
      texts: {
        text1: 'Tijuana B.C.',
        text2: '(664) 634-1615 / 684-7425',
        text3: 'Blvd Sánchez Taboada 101102-15, Plaza Financiera, Zona Río, Tijuana, B.C.',
        text4: 'tijuanainfo',
        text5: '@lasermedica.com.mx',
      },
      doctors: [{
        href: '/equipo',
        title: 'Dr.Jorge Ibarra',
      }, {
        href: '/equipo',
        title: 'Dra.Priscilla Ibarra',
      }, {
        href: '/equipo',
        title: 'Carlos Sanchez Jimenez',
      }],
    }, {
      id: 'locationMexicali',
      texts: {
        text1: 'Mexicali B.C.',
        text2: '01 686 552 3672',
        text3: 'Madero 703, 21000 Mexicali, B.C.',
        text4: 'mexicaliinfo',
        text5: '@lasermedica.com.mx',
      },
    }, {
      id: 'locationEnsenada',
      texts: {
        text1: 'Ensenada B.C.',
        text2: '01 646 1773600',
        text3: 'Calle floresta #160 entre 1ra y 2da colonia obrera, CP 22830 Ensenada, B.C.',
        text4: 'ensenadainfo',
        text5: '@lasermedica.com.mx',
      },
    }],
  },
};
