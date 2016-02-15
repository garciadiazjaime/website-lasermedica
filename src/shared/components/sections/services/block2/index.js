import React from 'react';

import Repeat from '../../../elements/repeat';
import Template3 from '../../../templates/template3';


export default class Block2 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
      <Repeat data={data} Template={Template3} />
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.array.isRequired,
};
