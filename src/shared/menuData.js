import AppHandler from './components/AppHandler';
import HomeSection from './components/sections/home';
import AboutSection from './components/sections/about';
import ServicesSection from './components/sections/services';
import ContactSection from './components/sections/contact';


export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      title: 'Inicio',
      url: '/inicio',
      component: HomeSection,
    }, {
      title: 'Nosotros',
      url: '/nosotros',
      component: AboutSection,
    }, {
      title: 'Servicios',
      url: '/servicios',
      component: ServicesSection,
    }, {
      title: 'Contacto',
      url: '/contacto',
      component: ContactSection,
    }],
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/',
  }],
  addresses: [{
    id: 'google',
    title: 'Mountain View',
    location: '1600 Amphitheatre Parkway Mountain View, CA 94043',
    gmaps: 'https://www.maps.google.com/',
    tels: '1 650-253-0000',
  }],
};
