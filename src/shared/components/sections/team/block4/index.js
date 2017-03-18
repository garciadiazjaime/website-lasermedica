import React from 'react';

import data from './data';
import locationUtil from '../../../../utils/locationUtil';
import Repeat from '../../../elements/repeat';
import Template from './template';

export default class Block4 extends React.Component {

  render() {
    return (<div className="container-fluid">
      <div className="row">
        <Repeat Template={Template} data={data[locationUtil.getLang()]} />
      </div>
      </div>);
  }
}
