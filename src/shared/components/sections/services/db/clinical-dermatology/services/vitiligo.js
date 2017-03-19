/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Vitiligo',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-clinica/05_vitiligio.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: '',
  text: 'Vitiligo is a skin condition characterized by patches of the skin losing their pigment. The patches of skin affected become white. It can affect different areas of the body and has an unpredictable course. What happens is that the melanocytes of the skin are destroyed by the immune system due to an error, so the production of melanin (substance that pigments the skin) stops. There are several ideas about the cause of this disease, being the patient\'s emotional state one of them.',
}, Common.EN.item12, {
  type: 'text',
  className: '',
  text: 'There are different types of treatments to deal with vitiligo, some are topical medications, others are oral, ultraviolet treatment and grafts. It is important to take into account the instructions given by the doctor, because the improvement of this condition depends on them. In Lasermedica we know that each case is different, so we invite you to consult with our specialists to clarify your doubts about your skin\'s health.',
}, _.assign({}, Common.EN.item15, {
  href: '/contact/vitiligo',
})];
