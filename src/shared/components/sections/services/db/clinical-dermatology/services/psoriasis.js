/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Psoriasis',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-clinica/04_psoriasis.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: 'regularMargin',
  text: 'Psoriasis is a chronic disease, of unknown cause, with multifactorial etiology, that causes desquamation, thickening and inflammation of the skin. It\'s not contagious and is due to a skin cell build up. It\'s usually asymptomatic but you may feel some itchiness in the dry patches. It commonly appears on the elbows, knees, abdomen, back and scalp, affecting both sides of the body. It can be induced or worsened by:',
}, {
  type: 'list',
  className: '',
  items: [
    'Injuries',
    'Emotional stress',
    'Infections',
    'Contact allergens',
    'Pharmaceuticals',
    'Obesity',
    'Hormonal changes',
  ],
}, Common.EN.item12, {
  type: 'text',
  className: '',
  text: 'Depending on the intensity of the patient\'s psoriasis and their level of response to treatment, there are several ways we can help control the disease and in some cases make the symptoms disappear. Among the treatments are the topical use of substances such as creams and lotions in the affected area, phototherapy and oral medication. The above can be used separately or together for better control of the disease.',
}, {
  type: 'text',
  className: '',
  text: 'In Lasermedica we care about your health. Feel free to contact us with your doubts or concerns about the treatment.',
}, _.assign({}, Common.EN.item15, {
  href: '/contact/psoriasis',
})];
