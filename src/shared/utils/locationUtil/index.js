/* eslint max-len: [2, 500, 4] */

const locationUtil = function () {
};

locationUtil.setLocation = function (location) {
  this.location = location;
  this.lang = locationUtil.getLangByLocation(location);
};

locationUtil.getLocation = function () {
  return this.location;
};

locationUtil.getLang = function () {
  return this.lang || 'ES';
};

locationUtil.getSpanishLocation = function () {
  if (this.lang === 'ES') {
    return this.location;
  }
  return '/inicio';
};

locationUtil.getEnglishLocation = function () {
  if (this.lang === 'EN') {
    return this.location;
  }
  return '/home';
};

locationUtil.getBaseUrl = function () {
  return this.lang === 'ES' ? '/inicio' : '/home';
};

locationUtil.getLangByLocation = function (location) {
  const spanishLocations = ['/', '/inicio', '/nosotros', '/equipo', '/servicios', '/contacto'];
  console.log('spanishLocations', spanishLocations);
  return spanishLocations.indexOf(location) !== -1 ? 'ES' : 'EN';
};

locationUtil.isLangEs = function () {
  return this.lang === 'ES';
};

export default locationUtil;
