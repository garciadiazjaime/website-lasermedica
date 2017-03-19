/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Soft Fibroma (Skin Tag)',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-clinica/07_fibromas_laxos.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: 'normal_break',
  text: [
    'Like warts, soft fibromas are a kind of uncontrollable growth of the skin on the outer layer of the dermis, that grow especially in the neck area. The incidence of this condition increases with age, weight gain, pregnancy and in some cases they also appear in children. These lesions do not cause pain when they occur and do not present any symptomatology.',
    'Although soft fibromas don\'t cause any pain, aesthetically they\'re not very pleasing, the appearance of the skin becomes rough and these warts can continue to grow, so many patients choose to remove them, in order to have more confidence and certainty in their physical appearance.',
  ],
}, Common.EN.item12, {
  type: 'text',
  className: '',
  text: 'In Lasermedica we use the best techniques to eliminate soft fibromas in a radical way so we can improve our patient\'s image; using lasers, electrocauterization and / or cutting, depending on the specific needs of each case.',
}, _.assign({}, Common.EN.item15, {
  href: '/contact/soft-fibroma',
})];
