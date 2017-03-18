export default class LocationUtil {

  constructor(location) {
    this.location = location;
    this.lang = this.getLangByLocation(location);
  }

  getSpanishLocation() {
    if (this.lang === 'ES') {
      return this.location;
    }
    return '/inicio';
  }

  getEnglishLocation() {
    if (this.lang === 'EN') {
      return this.location;
    }
    return '/home';
  }

  getBaseUrl() {
    return this.lang === 'ES' ? '/inicio' : '/home';
  }

  getLangByLocation(location) {
    console.log('location', location);
    const spanishLocations = ['/', '/inicio'];
    return spanishLocations.indexOf(location) !== -1 ? 'ES' : 'EN';
  }
}
