import React from 'react';
import _ from 'lodash';

import Block1 from './block1';
import Block2 from './block2';
import dbData from './data';


export default class ServicesSection extends React.Component {

  getMenuData(data) {
    const items = [];
    if (_.isArray(data) && data.length) {
      data.map((item) => {
        if (item.isRoot) {
          items.push({
            title: item.title,
            description: item.description,
            href: item.href,
            className: item.className,
          });
        }
      });
    }
    return items;
  }

  render() {
    const menuData = this.getMenuData(dbData.services);
    return (<div>
      <Block1 data={dbData.block1} />
      <Block2 data={menuData} />
    </div>);
  }
}
