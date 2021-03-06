/* eslint max-len: [2, 500, 4] */
import React from 'react';
import _ from 'lodash';

import locationUtil from '../../../../utils/locationUtil';
import dbServices from '../../../sections/services/db';
import Cover from './cover';
import dataTexts from './data';

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
    const servicesData = this.getServicesData(dbServices[locationUtil.getLang()]);
    const data = dataTexts[locationUtil.getLang()];
    return (<div id="services-menu" className="container-fluid hidden" style={{ position: 'relative' }}>
      <div className={'row ' + style.services_menu}>
          <div className={'col-xs-3 ' + style.leftPanel}>
            <h3>{data.texts.text1}</h3>
            <p>{data.texts.text2}</p>
            <div className="bgImage" />
          </div>
          <Cover data={servicesData} />
      </div>
    </div>);
  }
}
