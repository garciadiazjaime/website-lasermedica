import React from 'react';

import Block1 from './block1';
import Block2 from './block2';

export default class ContactSection extends React.Component {

  render() {
    // todo: considered params (service, location)
    return (<div>
      <Block1 />
      <br />
      <Block2 />
    </div>);
  }
}
