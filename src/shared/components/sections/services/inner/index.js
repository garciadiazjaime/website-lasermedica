/* eslint max-len: [2, 600, 4] */

import React from 'react';
import _ from 'lodash';

import Header from './header';
import Body from './body';
// import Footer from './footer';
// import Block5 from './../../home/block5';
import servicesData from '../db';
import dataService from './data';
// import dataBlocksHome from '../../home/data';
import Utils from './utils';
const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class ServiceInner extends React.Component {

  getServiceData(data, categoryUrl) {
    if (_.isArray(data) && data.length) {
      const categoryItems = Utils.setCategoryItems(data, categoryUrl);
      for (let i = 0, len = categoryItems.length; i < len; i++) {
        const { href } = categoryItems[i];
        if (href) {
          return categoryItems[i];
        }
      }
    }
    return null;
  }

  // getData(data, category, subcategory, service) {
  //   try {
  //     return {
  //       header: require('../db/' + category + '/' + subcategory + '/header_common'),
  //       content: require('../db/' + category + '/' + subcategory + '/' + service),
  //     };
  //   } catch (err) {
  //     console.error(err.message);
  //     return null;
  //   }
  // }

  getMenuItems(data, categoryUrl, service) {
    if (_.isArray(data) && data.length) {
      const serviceData = this.getServiceData(data, categoryUrl);

      if (_.isArray(serviceData.children) && serviceData.children.length) {
        return serviceData.children.map((item, index) => {
          let className = '';
          const activeClass = style.active;
          if (!service && index === 0) {
            className = activeClass;
          } else if (service && !className) {
            className = service.toUpperCase() === item.href.toUpperCase() ? activeClass : null;
          }

          return {
            title: item.title,
            href: [categoryUrl, item.href].join(''),
            className,
          };
        });
      }
    }
    return null;
  }

  getDefaultValues(data, sectionUrl, categoryUrl, serviceUrl) {
    const response = {
      section: sectionUrl,
      category: categoryUrl,
      service: serviceUrl,
    };

    if (!serviceUrl) {
      if (_.isArray(data) && data.length) {
        for (let i = 0, len = data.length; i < len; i++) {
          const categoryTmp = [sectionUrl, categoryUrl].join('');
          if (data[i].href.toUpperCase() === categoryTmp.toUpperCase()) {
            const children = data[i].children;
            for (let j = 0, len2 = children.length; j < len2; j++) {
              const { type } = children[j];
              if (type.toUpperCase() === 'LIST') {
                response.service = children[j].children[0].href; // .replace('/', '');
                break;
              }
            }
            if (response.service) {
              break;
            }
          }
        }
      }
    }

    return response;
  }

  render() {
    const pathname = this.props.location.pathname;
    const bits = pathname.split('/');
    const category = '/' + bits[2];
    const service = bits[3] ? '/' + bits[3] : null;
    const params = this.getDefaultValues(servicesData, '/servicios', category, service);
    // const data = this.getData(servicesData, category, params.subcategory, params.service);
    const categoryUrl = [params.section, params.category].join('');
    const menuItems = this.getMenuItems(servicesData, categoryUrl, service);
    //
    // return (<div id={category}>
    //   <Header data={data.header} subcategory={subcategory} />
    // <Body data={data.content} menuItems={menuItems} service={service} />
    // </div>);
    return (<div>
      <Header data={dataService.block1} />
      <Body menuItems={menuItems} service={service} />
    </div>);
  }
}

ServiceInner.propTypes = {
  location: React.PropTypes.any,
};