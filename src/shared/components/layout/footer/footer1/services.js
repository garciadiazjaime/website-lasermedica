import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';
import dbServices from '../../../sections/services/db';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Services extends React.Component {

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

  renderServices(data) {
    const renderServiceChildren = (items) => {
      const className = items.length > 5 ? 'col-xs-12 col-md-6' : 'col-sm-12';
      return items.map((service, index) => {
        return (<div className={className + ' ' + style.serviceElement}>
          <Link to={service.href} title={service.title} key={index}>
          {service.title}
          </Link>
        </div>);
      });
    };
    const servicesEl = data.map((item, index) => {
      const childrenEl = renderServiceChildren(item.items);
      return (<div className="col-sm-4">
        <Link className={style.serviceTitle} to={item.href} title={item.title} key={index}>
          {item.title}
        </Link>
        <div className="row">
          {childrenEl}
        </div>
      </div>);
    });
    return (<div className="row">{servicesEl}</div>);
  }

  render() {
    const servicesData = this.getServicesData(dbServices);

    return (<div>
      {this.renderServices(servicesData)}
    </div>);
  }
}
