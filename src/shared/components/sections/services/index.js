import React from 'react';

import Block1 from './block1';
import Block2 from './block2';
import Block3 from './block3';

export default class ServicesSection extends React.Component {

  render() {
    // const servicesData = this.getServicesData(dataServices);
    // <Block3 data={servicesData} />
    return (<div>
      <Block1 />
      <Block2 />
      <Block3 />
    </div>);
  }
}
