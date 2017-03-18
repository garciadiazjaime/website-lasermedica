/* eslint max-len: [2, 600, 4] */

export default {
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
};
