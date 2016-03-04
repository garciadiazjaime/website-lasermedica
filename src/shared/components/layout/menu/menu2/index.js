import React from 'react';
import _ from 'lodash';

import dbServices from '../../../sections/services/db';
import Cover from './cover';
// import Services from './services';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class ServicesMenu extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      selectedServiceIndex: 0,
    };
  }

  getServicesData(data) {
    const getItems = (children) => {
      let i = 0;
      const len = children.length;
      for (; i < len; i++) {
        if (children[i].type.toUpperCase() === 'LIST') {
          return children[i].children;
        }
      }
    };

    if (_.isArray(data) && data.length) {
      return data.map((item) => {
        return {
          href: item.href,
          title: item.title,
          items: getItems(item.children),
        };
      });
    }
    return null;
  }

  render() {
    const servicesData = this.getServicesData(dbServices);
    // const selectedService = servicesData[this.state.selectedServiceIndex];

    return (<div id="services-menu" className="container-fluid visible-md">
      <div className="row">
        <div className={'col-xs-3 ' + style.leftPanel}>
          <h3>Nuestros Servicios</h3>
          <p>Conoce nuestros servicios y descubre cómo podemos ayudarte.</p>
          <div className="bgImage" />
        </div>
        <Cover data={servicesData} />
      </div>
    </div>);
  }
}
