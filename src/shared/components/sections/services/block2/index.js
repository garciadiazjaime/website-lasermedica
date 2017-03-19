import React from 'react';
import _ from 'lodash';

import Repeat from '../../../elements/repeat';
import Template3 from '../../../templates/template3';
import dataServices from '../db';
import locationUtil from '../../../../utils/locationUtil';

export default class Block2 extends React.Component {

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
    const data = this.getMenuData(dataServices[locationUtil.getLang()]);
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <div className="row">
            <Repeat data={data} Template={Template3} />
          </div>
        </div>
      </div>
    </div>);
  }
}
