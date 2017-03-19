/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: '360 Treatment',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-cosmetica/02_tratamiento_360.jpg',
  text: '360 Treatment',
}, Common.EN.item1, {
  type: 'text',
  className: 'normal_break',
  text: [
    'In Lasermedica we know the importance of a smooth and fresh-looking skin, and that is why we offer the 360 treatment, a fast and - most importantly - non-invasive method that gives your skin a rejuvenated and radiant appearance with a natural look.',
    'This treatment fights fine wrinkles, facial spots, improves skin tone and helps eliminate flaccidity, giving firmness to the face and neck through a combination of techniques such as fractional laser, IPL and radiofrequency (according to the needs of each patient), showing results only 60 days after starting the treatment.',
  ],
}, Common.EN.item5, {
  type: 'list',
  className: '',
  items: [
    'Skin rejuvenation',
    'Improve color',
    'Fresher look and softer texture',
    'Reduce sagging skin',
  ],
}, Common.EN.item6, {
  type: 'text',
  className: 'normal_break',
  text: [
    'The triple combination of Fractional laser, IPL and Radiofrequency is performed in one session, invariably improving the appearance of the skin. Depending on the assessment by the doctor, subsequent sessions will be performed to obtain the best results or give the proper maintenance.',
    'The Fractional laser helps improve texture and tone, smooths out small wrinkles, and helps close pores. One of the advantages of this treatment is that it causes very little discomfort.',
    'The IPL (Intense Pulsed Light) gets rid of discolored skin patches, visibly improving its appearance, this is because the light beam it emits destroys the pigment that cause these spots. And finally, Radiofrequency therapy helps tighten the skin, it induces the production of collagen.',
    'We invite you to make an appointment with us to help you choose the specific treatment for your skin. In Lasermedica we care about having the latest technology and offering the best service to our patients.',
  ],
}, _.assign({}, Common.EN.item4, {
  href: '/contact/360-treatment',
})];
