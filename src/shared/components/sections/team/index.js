import React from 'react';

import Block1 from './block1';
// import Block2 from './block2';
// import Block3 from './block3';
// import Block4 from './block4';
// import Block5 from './block5';
// <Block2 data={data.block2} />
// <Block3 data={data.block3} />
// <Block4 data={data.block4} />
// <Block5 data={data.block5} />
import data from './data';


export default class EquipoSection extends React.Component {
  render() {
    return (<div>
      <Block1 data={data.block1} />

    </div>);
  }
}
