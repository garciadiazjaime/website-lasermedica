import React from 'react';
import { Link } from 'react-router';

import locationUtil from '../../../../utils/locationUtil';
const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class SiteMap extends React.Component {

  getItems(data, lang) {
    const items = data.map((item, index) => {
      const children = item.children ? this.getItems(item.children) : null;

      return item.lang === lang ? (<li key={index}>
        <Link to={item.url}>{item.title}</Link>
        { children }
      </li>) : null;
    }, this);
    return (<div className={'row ' + style.sitemap}>
      <div className={'col-xs-12 ' + style.pad30}>
        <ul>{items}</ul>
      </div>
    </div>);
  }

  render() {
    return this.getItems(this.props.data, locationUtil.getLang());
  }
}

SiteMap.propTypes = {
  data: React.PropTypes.array.isRequired,
};
