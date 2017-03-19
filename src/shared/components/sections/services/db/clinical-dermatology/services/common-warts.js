/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Common Warts',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-clinica/06_verrugas_vulgares.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: '',
  text: 'Warts are hard, rough-looking skin growths that can appear in any area of the body. They are transmitted through contact with Human Papillomavirus (HPV). Their surface can be rough, firm and similar in color to the rest of the skin. It is very common that they appear in areas of injured skin, where the virus can be implanted quicker. It is important to know that the appearance of a wart may vary depending on the area where it is located.',
}, Common.EN.item12, {
  type: 'text',
  className: 'regularMargin',
  text: 'In Lasermedica we offer different types of treatment depending on the type and location of a wart. Among them are:',
}, {
  type: 'strong',
  className: 'regularMargin',
  text: 'Topical medications:',
}, {
  type: 'text',
  className: 'regularMargin',
  text: 'Applying topical medications will help remove the warts on the skin slowly and without scarring.',
}, {
  type: 'strong',
  className: 'regularMargin',
  text: 'Electrosurgery:',
}, {
  type: 'text',
  className: 'regularMargin',
  text: 'Wart tissue is burned off with a high frequency electric current.',
}, {
  type: 'strong',
  className: 'regularMargin',
  text: 'Laser:',
}, {
  type: 'text',
  className: '',
  text: 'The laser will burn the wart removing it completely.',
}, _.assign({}, Common.EN.item15, {
  href: '/contact/common-warts',
})];
