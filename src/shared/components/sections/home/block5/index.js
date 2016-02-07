import React from 'react';

import Repeat from '../../../elements/repeat';
import Template from './template';


export default class Block5 extends React.Component {

  render() {
    const { items, texts } = this.props.data;
    return (<div>
        <h3>{texts.text1}</h3>
        <h2>{texts.text2}</h2>
        <Repeat data={items} Template={Template} />
      </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
