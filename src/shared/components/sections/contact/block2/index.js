import React from 'react';

import Location from '../location';
import data from './data';
import locationUtil from '../../../../utils/locationUtil';

export default class Block2 extends React.Component {

  render() {
    return (<div className="container-fluid">
      <Location data={data[locationUtil.getLang()]} />
    </div>);
  }
}
