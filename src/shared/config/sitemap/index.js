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
      id: 1,
      title: 'Inicio',
      url: '/inicio',
      lang: 'ES',
      component: HomeSection,
    }, {
      id: 1,
      title: 'Home',
      url: '/home',
      lang: 'EN',
      component: HomeSection,
    }, {
      id: 2,
      title: 'La Clínica',
      url: '/nosotros',
      lang: 'ES',
      component: AboutSection,
    }, {
      id: 2,
      title: 'About US',
      url: '/aboutus',
      lang: 'EN',
      component: AboutSection,
    }, {
      id: 3,
      title: 'Equipo',
      url: '/equipo',
      lang: 'ES',
      component: EquipoSection,
    }, {
      id: 3,
      title: 'Team',
      url: '/team',
      lang: 'EN',
      component: EquipoSection,
    }, {
      id: 4,
      title: 'Servicios',
      url: '/servicios',
      lang: 'ES',
      component: ServicesSection,
    }, {
      id: 4,
      title: 'Services',
      url: '/services',
      lang: 'EN',
      component: ServicesSection,
    }, {
      id: 5,
      title: 'Contacto',
      url: '/contacto',
      lang: 'ES',
      component: ContactSection,
    }, {
      id: 5,
      title: 'Contact',
      url: '/contact',
      lang: 'EN',
      component: ContactSection,
    }],
  },
  icons: [{
    id: 'facebook',
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
