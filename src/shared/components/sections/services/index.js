import React from 'react';

import Block1 from './block1';
import data from './data';


export default class ServicesSection extends React.Component {
  render() {
    return (<div>
      <Block1 data={data.block1} />
    </div>);
  }
}
