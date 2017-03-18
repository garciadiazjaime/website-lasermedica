import React from 'react';

import Template from '../../../templates/template2';
import data from './data';
import locationUtil from '../../../../utils/locationUtil';

export default class Block1 extends React.Component {

  render() {
    return (<div>
        <Template data={data[locationUtil.getLang()]} index={0} />
      </div>);
  }
}
