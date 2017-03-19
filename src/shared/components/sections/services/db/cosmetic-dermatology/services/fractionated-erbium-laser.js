/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Fractionated Erbium Laser (Alma Pixel)',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-cosmetica/03_laser_erbium_fraccionado.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: '',
  text: 'If you are looking for a facial rejuvenation avoiding cosmetic surgery because of the risks involved, then fractured erbium laser is ideal for you, as it achieves similar results as a facelift through a small wear on the first layers of the skin and without complications.',
}, Common.EN.item5, {
  type: 'list',
  className: '',
  items: [
    'Eliminate wrinkles and smooth lines of expression',
    'Reduce scars',
    'Improve the texture and color of the skin',
    'Combat superficial flaccidity',
  ],
}, Common.EN.item7, {
  type: 'text',
  className: 'normal_break',
  text: [
    'This laser stimulates the production of collagen, also creating a protective layer on the skin, returning its natural tone, giving it a fresher and smoother appearance.',
    'It is important to mention that the erbium laser works on all skin types, although it is necessary for one of our experts to perform an assessment to indicate the treatment that offers the best results for you.',
  ],
}, _.assign({}, Common.EN.item4, {
  href: '/contact/fractionated-erbium-laser',
})];
