/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Fractionated C02 Laser (Trixel II)',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-cosmetica/04_laser_co2.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: '',
  text: 'It\'s a procedure used in face, neck and hands rejuvenation, in which punctual burns are generated on the skin - which stimulates the production of collagen - giving way to new skin, regenerating the dermis affected by the passage of time, sun, acne and other factors. The most important thing about this treatment is that it\'s not invasive, has immediate results and the pain that could occur when doing such treatment is tolerable.',
}, Common.EN.item5, {
  type: 'list',
  className: '',
  items: [
    'Rejuvenation of the face, neck and hands',
    'Lighten sunspots',
    'Reduce scars caused by acne',
    'Eliminate wrinkles and smooth lines of expression',
    'Reduce enlarged pores',
  ],
}, Common.EN.item7, {
  type: 'text',
  className: 'normal_break',
  text: [
    'In Lasermedica we have the best technical and medical equipment, this treatment is done through the emission of light beams that penetrate the skin causing microscopic lesions that regenerate the dermis and activate the collagen that tightens the skin, obtaining a more youthful and smooth appearance.',
    'We invite you to come and get to know our facilities and other dermatological treatments, our experts will assist you in finding the treatment that will help you achieve excellent skin.',
  ],
}, _.assign({}, Common.EN.item4, {
  href: '/contact/laser-co2-fractionated',
})];
