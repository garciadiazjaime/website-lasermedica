import React from 'react';
import _ from 'lodash';

import Repeat from '../../../elements/repeat';
import Template4 from '../../../templates/template4';
import dataServices from '../db';
import locationUtil from '../../../../utils/locationUtil';

export default class Block3 extends React.Component {

  getServicesData(data) {
    if (_.isArray(data) && data.length) {
      return data.slice(0, 5).map((item) => {
        return {
          href: item.href,
          children: item.children,
        };
      });
    }
    return null;
  }

  render() {
    const data = this.getServicesData(dataServices[locationUtil.getLang()]);
    return (<div className="container-fluid">
      <Repeat data={data} Template={Template4} />
    </div>);
  }
}
