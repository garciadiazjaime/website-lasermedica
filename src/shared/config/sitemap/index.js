import AppHandler from '../../components/AppHandler';
import HomeSection from '../../components/sections/home';
import AboutSection from '../../components/sections/about';
import EquipoSection from '../../components/sections/team';
import ServicesSection from '../../components/sections/services';
import ContactSection from '../../components/sections/contact';


export default {
  items: {
    component: AppHandler,
    default: HomeSection,
    children: [{
      title: 'Inicio',
      url: '/inicio',
      lang: 'ES',
      component: HomeSection,
    }, {
      title: 'Home',
      url: '/home',
      lang: 'EN',
      component: HomeSection,
    }, {
      title: 'La Clínica',
      url: '/nosotros',
      lang: 'ES',
      component: AboutSection,
    }, {
      title: 'About US',
      url: '/aboutus',
      lang: 'EN',
      component: AboutSection,
    }, {
      title: 'Equipo',
      url: '/equipo',
      lang: 'ES',
      component: EquipoSection,
    }, {
      title: 'Team',
      url: '/team',
      lang: 'EN',
      component: EquipoSection,
    }, {
      title: 'Servicios',
      url: '/servicios',
      lang: 'ES',
      component: ServicesSection,
    }, {
      title: 'Services',
      url: '/services',
      lang: 'EN',
      component: ServicesSection,
    }, {
      title: 'Contacto',
      url: '/contacto',
      lang: 'ES',
      component: ContactSection,
    }, {
      title: 'Contact',
      url: '/contact',
      lang: 'EN',
      component: ContactSection,
    }],
  },
  icons: [{
    title: 'facebook',
    url: 'https://www.facebook.com/LaserMedicaDermatologia',
  }],
  addresses: [{
    title: 'Tijuana',
    tel: '(664) 634-1615 / 684-7425',
  }, {
    title: 'Mexicali',
    tel: '(686) 552-3672',
  }, {
    title: 'Ensenada',
    tel: '(686) 552-3672',
  }, {
    title: 'Farmacia de la Piel',
    tel: '(664) 684-8288',
  }],
};
