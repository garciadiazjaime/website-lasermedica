/* eslint max-len: [2, 600, 4] */

import React from 'react';
// import _ from 'lodash';

import Header from './header';
// import Body from './body';
// import Footer from './footer';
// import Block5 from './../../home/block5';
// import servicesData from '../db';
import dataService from './data';
// import dataBlocksHome from '../../home/data';
// import Utils from './utils';
// const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class ServiceInner extends React.Component {

  // getServiceData(data, categoryUrl, subcategoryUrl) {
  //   if (_.isArray(data) && data.length) {
  //     const categoryItems = Utils.setCategoryItems(data, categoryUrl);
  //     for (let i = 0, len = categoryItems.length; i < len; i++) {
  //       const { type, href } = categoryItems[i];
  //       if (!subcategoryUrl && type.toUpperCase() === 'LIST') {
  //         return categoryItems[i];
  //       } else if (subcategoryUrl && href && href.toUpperCase() === subcategoryUrl.toUpperCase()) {
  //         return categoryItems[i];
  //       }
  //     }
  //   }
  //   return null;
  // }
  //
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
  //
  // getMenuItems(data, categoryUrl, subcategory, service) {
  //   if (_.isArray(data) && data.length) {
  //     const serviceData = this.getServiceData(data, categoryUrl, subcategory);
  //
  //     if (_.isArray(serviceData.children) && serviceData.children.length) {
  //       return serviceData.children.map((item, index) => {
  //         let className = '';
  //         const activeClass = style.active;
  //         if (!service && index === 0) {
  //           className = activeClass;
  //         } else if (service && !className) {
  //           className = service.toUpperCase() === item.href.toUpperCase() ? activeClass : null;
  //         }
  //
  //         return {
  //           title: item.title,
  //           href: [categoryUrl, serviceData.href, item.href].join('/'),
  //           className,
  //         };
  //       });
  //     }
  //   }
  //   return null;
  // }
  //
  // getDefaultValues(data, sectionUrl, categoryUrl, subcategoryUrl, serviceUrl) {
  //   const response = {
  //     section: sectionUrl,
  //     category: categoryUrl,
  //     subcategory: subcategoryUrl,
  //     service: serviceUrl,
  //   };
  //
  //   if (!subcategoryUrl) {
  //     if (_.isArray(data) && data.length) {
  //       for (let i = 0, len = data.length; i < len; i++) {
  //         const categoryTmp = [sectionUrl, categoryUrl].join('/');
  //         if (data[i].href.toUpperCase() === categoryTmp.toUpperCase()) {
  //           const children = data[i].children;
  //           for (let j = 0, len2 = children.length; j < len2; j++) {
  //             if (children[j].type.toUpperCase() === 'LIST') {
  //               response.subcategory = children[j].href.replace('/', '');
  //               response.service = children[j].children[0].href.replace('/', '');
  //               break;
  //             }
  //           }
  //           break;
  //         }
  //       }
  //     }
  //   } else if (!serviceUrl) {
  //     if (_.isArray(data) && data.length) {
  //       for (let i = 0, len = data.length; i < len; i++) {
  //         const categoryTmp = [sectionUrl, categoryUrl].join('/');
  //         if (data[i].href.toUpperCase() === categoryTmp.toUpperCase()) {
  //           const children = data[i].children;
  //           for (let j = 0, len2 = children.length; j < len2; j++) {
  //             const { type, href } = children[j];
  //             if (type.toUpperCase() === 'LIST' && href === subcategoryUrl) {
  //               response.subcategory = children[j].href.replace('/', '');
  //               response.service = children[j].children[0].href.replace('/', '');
  //               break;
  //             }
  //           }
  //           if (response.service) {
  //             break;
  //           }
  //         }
  //       }
  //     }
  //   }
  //
  //   return response;
  // }

  render() {
    // const pathname = this.props.location.pathname;
    // const bits = pathname.split('/');
    // const paramIndex = !bits[0] ? 2 : 1;
    // const category = bits[paramIndex];
    // const subcategory = bits[paramIndex + 1] || null;
    // const service = bits[paramIndex + 2] || null;
    // const params = this.getDefaultValues(servicesData, 'servicios', category, subcategory, service);
    // const data = this.getData(servicesData, category, params.subcategory, params.service);
    // const categoryUrl = [params.section, params.category].join('/');
    // const menuItems = this.getMenuItems(servicesData, categoryUrl, subcategory, service);
    //
    // return (<div id={category}>
    //   <Header data={data.header} subcategory={subcategory} />
    //   {
    //     category.toUpperCase() !== 'CONSULTORIA' && category.toUpperCase() !== 'NUEVO-ENTRANTE' ?
    //     <Body data={data.content} menuItems={menuItems} service={service} /> : null
    //   }
    //   <Footer data={dataBlocks.block1}>
    //     { category.toUpperCase() === 'SEGUROS' ? <Block5 data={dataBlocksHome.block5} /> : null }
    //   </Footer>
    // </div>);
    return (<div>
      <Header data={dataService.block1} />
    </div>);
  }
}

ServiceInner.propTypes = {
  location: React.PropTypes.any,
};
