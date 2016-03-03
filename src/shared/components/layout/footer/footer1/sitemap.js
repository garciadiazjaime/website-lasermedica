import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class SiteMap extends React.Component {

  getItems(data) {
    const items = data.map((item, index) => {
      const children = item.children ? this.getItems(item.children) : null;

      return (<li key={index}>
        <a href={item.url} target="_blank">{item.title}</a>
        { children }
      </li>);
    }, this);
    return (<div className={'row ' + style.sitemap}><ul>{items}</ul></div>);
  }

  render() {
    return this.getItems(this.props.data);
  }
}

SiteMap.propTypes = {
  data: React.PropTypes.array.isRequired,
};
