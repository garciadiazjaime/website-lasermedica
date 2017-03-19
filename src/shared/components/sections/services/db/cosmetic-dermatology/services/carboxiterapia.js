/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Carboxiterapia',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-cosmetica/09_carboxiterapia.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: 'normal_break',
  text: [
    'Carboxytherapy is a novelty and extremely effective treatment that uses carbon dioxide (CO2) to help fight cellulite, stretch marks, scars; it also improves circulation and elasticity of the skin and destroys stored fat in problem areas. It is a safe and minimally invasive procedure, it does not pose any risk of toxicity or side effects.',
    'This procedure consists of several sessions, as recommended by the team of Lasermedica. It has notable results and can be performed in conjunction with other treatments for better results.',
  ],
}, Common.EN.item5, {
  type: 'list',
  className: '',
  items: [
    'Combat cellulite',
    'Reduce stretch marks',
    'Fight sagging skin',
    'Treat small varicose veins',
    'Improves the results of liposculpture',
  ],
}, Common.EN.item7, {
  type: 'text',
  className: '',
  text: 'Through a very small needle, Co2 is injected. The Co2 is stored in a tank similar to the oxygen tank. The machine will be monitored by our team of professions, so they can regulate the flow of CO2 and the percentage necessary for the treatment. This can last for about 40 minutes, giving visible results almost instantly.',
}, _.assign({}, Common.EN.item4, {
  href: '/contact/carboxiterapia',
})];
