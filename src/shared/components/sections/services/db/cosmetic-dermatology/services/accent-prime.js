/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Accent Prime',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-cosmetica/21_accent_prime.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: '',
  text: 'Accent prime is Alma Laser’s most advanced workstation for skin tightening, body contouring and aesthetic enhancement. The platform combines the latest innovations in ultrasound and radio frequency technologies to deliver effective, highly customized treatments- with natural, long lasting results.',
}, Common.EN.item5, {
  type: 'list',
  className: '',
  items: [
    'It acts simultaneously on fat cells and collagen',
    'Reduces treatment time',
    'Uniform Results',
    'Depth Control',
    'Safe for all skin types',
  ],
}, _.assign({}, Common.EN.item4, {
  href: '/contact/accent-prime',
})];
