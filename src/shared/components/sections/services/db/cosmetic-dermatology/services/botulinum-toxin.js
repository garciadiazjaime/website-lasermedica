/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Botulinum Toxin',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-cosmetica/12_toxina_botulinica.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: 'normal_break',
  text: [
    'Facial expressions marked by the passage of time are inevitable, and while other products help to reduce wrinkles and improve the appearance of the skin, Botox is an injection based on the botulinum toxin that weakens or paralyzes the muscle in which it is injected, so it reduces the lines of expression on the face temporarily, as its effect lasts for about 4 months.',
    'Botox injection is a simple, non-surgical procedure, which application lasts only a few minutes and in only a few days it will begin its effect, resulting in a visible improvement of the appearance of your face. It is important that this product is applied by professionals to avoid facial distortion, altered function or immobility.',
  ],
}, Common.EN.item5, {
  type: 'list',
  className: '',
  items: [
    'Prevention and elimination of dynamic wrinkles on the face',
    'Can also be used for treatment of severe sweating',
  ],
}, Common.EN.item9, {
  type: 'text',
  className: 'normal_break',
  text: [
    'It\'s a painless treatment that consists of a series of small injections into the lines of expression around the eyes, frown, forehead and over the lips. It may cause itchiness at the time of the application, but it does not cause disability and the results are visible in just a couple of days. The application is extremely fast and you can resume normal activity immediately after treatment.',
    'We know the importance of having a natural appearance, so in Lasermedica we take care of each session, making sure that our patients are satisfied with their results. We invite you to meet our medical team and other treatments by visiting our facilities.',
  ],
}, _.assign({}, Common.EN.item4, {
  href: '/contact/botulinum-toxin',
})];
