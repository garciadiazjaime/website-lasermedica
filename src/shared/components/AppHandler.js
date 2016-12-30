/* eslint max-len: [2, 500, 4] */
import React from 'react';

import sitemap from '../config/sitemap';
import MainMenu from './layout/menu/menu1';
import Footer from './layout/footer/footer1';
import ServicesMenu from './layout/menu/menu2';
import scrollUtil from '../utils/scroll';
import menuUtil from '../utils/menu';


export default class AppHandler extends React.Component {

  componentDidMount() {
    this.scrollHandler(true);
    window.addEventListener('scroll', this.onScroll, false);
    if (!this.isMobile()) {
      let isMenuServiceDisplayed = false;
      $('a#servicios').hover(() => {
        $('#services-menu').removeClass('hidden');
      });

      $('div#services-menu').hover(() => {
        isMenuServiceDisplayed = true;
      }, () => {
        isMenuServiceDisplayed = false;
        $('#services-menu').addClass('hidden');
      });

      $('body').click(() => {
        if (!isMenuServiceDisplayed) {
          $('#services-menu').addClass('hidden');
        }
      });
    }

    // close open mainmenu, this happens on mobile
    $(document).on('click', '.navbar-collapse.in', (e) => {
      if ($(e.target).is('a')) {
        $('.navbar-collapse.in').collapse('hide');
      }
    });
  }

  componentDidUpdate() {
    this.scrollHandler();
  }

  componentWillUnmount() {
    window.removeEventListener('scroll', this.onScroll, false);
  }

  onScroll() {
    const offset = window.pageYOffset;
    if (offset > 186) {
      $('#menu_wrapper').addClass('navbar-fixed-top');
    } else {
      $('#menu_wrapper').removeClass('navbar-fixed-top');
    }
  }

  scrollHandler(isFirstTime) {
    const { location } = this.props;
    scrollUtil(location);
    if (!isFirstTime) {
      const bits = location.pathname.split('/');
      menuUtil(bits[1] || 'inicio');
    }
  }

  isMobile() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
  }

  render() {
    return (<div>
      <MainMenu items={sitemap.items.children} icons={sitemap.icons} />
      <ServicesMenu />
      {this.props.children}
      <Footer items={sitemap.items.children} addresses={sitemap.addresses}/>
    </div>);
  }
}

AppHandler.propTypes = {
  children: React.PropTypes.object.isRequired,
  location: React.PropTypes.any,
};
