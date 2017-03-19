/* eslint max-len: [2, 1000, 4] */
import _ from 'lodash';
import Common from '../../common';

module.exports = [{
  type: 'title',
  text: 'Acne',
  className: '',
}, {
  type: 'image',
  src: '/images/servicios/dermatologia-clinica/01_acne.jpg',
  text: 'Tratamiento 360',
}, Common.EN.item1, {
  type: 'text',
  className: 'normal_break',
  text: [
    'In the world, three out of four teenagers have had some kind of acne. This prevalence is due to the hormonal changes suffered during adolescence that stimulate the sebaceous glands, producing more sebum, increasing the chances of suffering acne.',
    'Even though it is more common to develop acne in the late teens and early twenties, there are cases where it occurs in adulthood, and it\'s usually caused by the menstrual period, use of birth control pills, oil-based products and emotional stress.',
  ],
}, Common.EN.item12, {
  type: 'text',
  className: '',
  text: 'Medication can be topical (applied directly to the skin) or systemic (by mouth, pills), and in some cases patients are given joint treatment. Acne can also be treated using laser-based technology and photo technology.',
}, Common.EN.item13, {
  type: 'text',
  className: '',
  text: 'It\'s the choice par excellence for treating mild acne. Some common topical medications that dermatologists recommend include benzoyl peroxide, antibiotics, retinoids, and salicylic acid. Topical medications vary in presentation, either being gel, lotions or creams. Your dermatologist will determine the most appropriate treatment for your skin.',
}, Common.EN.item14, {
  type: 'text',
  className: '',
  text: 'Oral antibiotics are usually prescribed in the treatment of moderate to severe acne, especially in cases where topical treatment had no effect and also if the patient suffers from acne in large areas of the body. Some of the oral antibiotics include tetracycline, doxycycline, erythromycin, azithromycin, minocycline and clindamycin. Other systemic medications that the doctor might prescribe are isotretinoin and hormones, depending on the case.',
}, _.assign({}, Common.EN.item15, {
  href: '/contact/acne',
})];
