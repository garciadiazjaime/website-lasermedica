/* eslint max-len: [2, 600, 4] */

export default {
  block1: {
    carousels: {
      carousel1: {
        meta: {
          sliderID: 'slider_home',
          interval: 8000,
          controls: {
            status: false,
            className: 'control1',
          },
          indicators: {
            status: true,
            className: 'indicator1',
          },
        },
        slides: [{
          classes: {
            class1: 'slide1',
          },
          texts: {
            text1: 'LA CLÍNICA DE LA PIEL',
          },
          links: {
            link1: {
              href: '/nosotros',
              title: 'La clínica',
            },
          },
        }, {
          classes: {
            class1: 'slide2',
          },
          texts: {
            text1: 'LA CLÍNICA DE LA PIEL',
          },
          links: {
            link1: {
              href: '/nosotros',
              title: 'La clínica',
            },
          },
        }],
      },
    },
  },

  block2: {
    texts: {
      text1: 'Nuestros Servicios',
      text2: 'Dermatología Cosmetíca',
      text3: 'Procedimientos de alta tecnología para el cuidado de la piel.',
      text4: 'Dermatología Clínica',
      text5: 'Tratamientos para enfermedades de la piel.',
      text6: 'Nuestros doctores',
      text7: 'Dermatólogos Certificados',
      text8: 'Doctores certificados por el consejo mexicano de dermatología.',
      text9: 'Nuestras',
      text10: 'Ubicaciones',
      text11: 'Tijuana',
      text12: 'Ensenada',
      text13: 'Mexicali',
      text14: 'La siguiente generación en dermatología',
    },
    links: {
      link1: {
        href: '/servicios/dermatologia-cosmetica',
        title: 'Dermatología Cosmetíca',
      },
      link2: {
        href: '/equipo/dermatologos-clinica',
        title: 'Dermatología Clínica',
      },
      link3: {
        href: '/equipo',
        title: 'Dermatólogos Certificados',
      },
      link4: {
        href: '/ubicacion/tijuana',
        title: 'Tijuana',
      },
      link5: {
        href: '/ubicacion/ensenada',
        title: 'Ensenada',
      },
      link6: {
        href: '/ubicacion/mexicali',
        title: 'Mexicali',
      },
    },
    images: {
      image1: {
        src: '',
        alt: 'dermatologos certificados',
      },
      image2: {
        src: '',
        alt: 'dermatologia cosmetica',
      },
    },
  },

  block3: {
    texts: {
      text1: 'Contamos con una amplia variedad de productos para tratamientos dermatológicos, cremas y cuidado de la piel.',
      text2: 'En Tijuana: ',
      text3: '(664) 634-1615',
      text4: 'Visítanos en:',
      text5: 'Blvd Sánchez Taboada 101102-15',
      text6: 'Plaza Financiera, Zona Río, Tijuana, B.C.',
    },
    links: {
      link1: {
        href: '/contacto',
        title: 'LLÁMANOS',
      },
    },
    images: {
      image1: {
        src: '',
        alt: 'laser medica',
      },
      image2: {
        src: '',
        alt: 'lasermedica cremas ',
      },
    },
  },

  block4: {
    carousels: {
      carousel1: {
        meta: {
          sliderID: 'slider_brands',
          interval: 80000,
          indicators: {
            status: false,
            className: 'indicator2',
          },
          controls: {
            status: true,
            className: 'control2',
          },
        },
        slides: [{
          className: 'slide',
          classes: {
            class1: 'slide1',
          },
          links: {
            link1: {
              href: '/',
              title: 'la roche posay',
            },
          },
        }, {
          classes: {
            class1: 'slide2',
          },
          links: {
            link1: {
              href: '/',
              title: 'avene',
            },
          },
        }, {
          classes: {
            class1: 'slide3',
          },
          links: {
            link1: {
              href: '/',
              title: 'vichy',
            },
          },
        }, {
          classes: {
            class1: 'slide4',
          },
          links: {
            link1: {
              href: '/',
              title: 'cetaphil',
            },
          },
        }, {
          classes: {
            class1: 'slide5',
          },
          links: {
            link1: {
              href: '/',
              title: 'a derma',
            },
          },
        }],
      },
    },
    images: {
      image1: {
        src: '',
        alt: 'la roche posay',
      },
      image2: {
        src: '',
        alt: 'avene',
      },
      image3: {
        src: '',
        alt: 'vichy',
      },
      image4: {
        src: '',
        alt: '',
      },
      image5: {
        src: '',
        alt: '',
      },
    },
  },

  block5: {
    texts: {
      text1: 'TRATAMIENTOS',
      text2: 'Dermatológicos',
    },
    items: [{
      title: 'Depilacion Laser',
      href: '/servicios/dermatologia-cosmetica/depilacion-laser',
      className: 'item1',
    }, {
      title: 'Tratamiento 360',
      href: '/servicios/dermatologia-cosmetica/tratamiento-360',
      className: 'item2',
    }, {
      title: 'Acné',
      href: '/servicios/dermatologia-clinica/acne',
      className: 'item3',
    }, {
      title: 'Melasma',
      href: '/servicios/dermatologia-clinica/melasma',
      className: 'item4',
    }],
  },
};
