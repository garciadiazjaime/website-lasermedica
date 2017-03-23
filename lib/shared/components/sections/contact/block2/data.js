'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
/* eslint max-len: [2, 600, 4] */

exports.default = {
  ES: {
    texts: {
      text1: 'Ubicaciones',
      text2: 'Ver en Google Maps'
    },
    maps: {
      locationTijuana: {
        className: 'location1',
        href: 'https://www.google.com/maps/place/Cl%C3%ADnica+de+la+Piel/@32.5254355,-117.025093,17z/data=!4m6!1m3!3m2!1s0x80d9484fb0ce359b:0xb918c99d75c1047b!2sCl%C3%ADnica+de+la+Piel!3m1!1s0x80d9484fb0ce359b:0xb918c99d75c1047b'
      },
      locationMexicali: {
        className: 'location2',
        href: 'https://www.google.com/maps/place/Av.+Madero+703,+Primera,+21100+Mexicali,+B.C.,+Mexico/@32.6649357,-115.4856743,18z/data=!4m2!3m1!1s0x80d77aae408205ed:0xe367cf93fcf2e22d'
      },
      locationEnsenada: {
        className: 'location3',
        href: 'https://www.google.com/maps/place/22830+Ensenada,+Baja+California,+Obrera,+Mexico/@31.8604718,-116.6251336,15z/data=!4m2!3m1!1s0x80d89270f04a84eb:0x7790f69df5cab35a'
      }
    },
    locations: [{
      id: 'locationTijuana',
      texts: {
        text1: 'Tijuana B.C.',
        text2: '(664) 634-1615 / 684-7425',
        text3: 'Blvd Sánchez Taboada 101102-15, Plaza Financiera, Zona Río, Tijuana, B.C.',
        text4: 'tijuanainfo',
        text5: '@lasermedica.com.mx'
      },
      doctors: [{
        href: '/equipo',
        title: 'Dr.Jorge Ibarra'
      }, {
        href: '/equipo',
        title: 'Dra.Priscilla Ibarra'
      }, {
        href: '/equipo',
        title: 'Carlos Sanchez Jimenez'
      }]
    }, {
      id: 'locationMexicali',
      texts: {
        text1: 'Mexicali B.C.',
        text2: '01 686 552 3672',
        text3: 'Madero 703, 21000 Mexicali, B.C.',
        text4: 'mexicaliinfo',
        text5: '@lasermedica.com.mx'
      }
    }, {
      id: 'locationEnsenada',
      texts: {
        text1: 'Ensenada B.C.',
        text2: '01 646 1773600',
        text3: 'Calle floresta #160 entre 1ra y 2da colonia obrera, CP 22830 Ensenada, B.C.',
        text4: 'ensenadainfo',
        text5: '@lasermedica.com.mx'
      }
    }]
  },
  EN: {
    texts: {
      text1: 'Locations',
      text2: 'Open in Google Maps'
    },
    maps: {
      locationTijuana: {
        className: 'location1',
        href: 'https://www.google.com/maps/place/Cl%C3%ADnica+de+la+Piel/@32.5254355,-117.025093,17z/data=!4m6!1m3!3m2!1s0x80d9484fb0ce359b:0xb918c99d75c1047b!2sCl%C3%ADnica+de+la+Piel!3m1!1s0x80d9484fb0ce359b:0xb918c99d75c1047b'
      },
      locationMexicali: {
        className: 'location2',
        href: 'https://www.google.com/maps/place/Av.+Madero+703,+Primera,+21100+Mexicali,+B.C.,+Mexico/@32.6649357,-115.4856743,18z/data=!4m2!3m1!1s0x80d77aae408205ed:0xe367cf93fcf2e22d'
      },
      locationEnsenada: {
        className: 'location3',
        href: 'https://www.google.com/maps/place/22830+Ensenada,+Baja+California,+Obrera,+Mexico/@31.8604718,-116.6251336,15z/data=!4m2!3m1!1s0x80d89270f04a84eb:0x7790f69df5cab35a'
      }
    },
    locations: [{
      id: 'locationTijuana',
      texts: {
        text1: 'Tijuana B.C.',
        text2: '(664) 634-1615 / 684-7425',
        text3: 'Blvd Sánchez Taboada 101102-15, Plaza Financiera, Zona Río, Tijuana, B.C.',
        text4: 'tijuanainfo',
        text5: '@lasermedica.com.mx'
      },
      doctors: [{
        href: '/team',
        title: 'Dr.Jorge Ibarra'
      }, {
        href: '/team',
        title: 'Dra.Priscilla Ibarra'
      }, {
        href: '/team',
        title: 'Carlos Sanchez Jimenez'
      }]
    }, {
      id: 'locationMexicali',
      texts: {
        text1: 'Mexicali B.C.',
        text2: '01 686 552 3672',
        text3: 'Madero 703, 21000 Mexicali, B.C.',
        text4: 'mexicaliinfo',
        text5: '@lasermedica.com.mx'
      }
    }, {
      id: 'locationEnsenada',
      texts: {
        text1: 'Ensenada B.C.',
        text2: '01 646 1773600',
        text3: 'Calle floresta #160 entre 1ra y 2da colonia obrera, CP 22830 Ensenada, B.C.',
        text4: 'ensenadainfo',
        text5: '@lasermedica.com.mx'
      }
    }]
  }
};