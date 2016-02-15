import React from 'react';

import Repeat from '../../../elements/repeat';
import Template4 from '../../../templates/template4';


export default class Block3 extends React.Component {


  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
        <Repeat data={data} Template={Template4} />
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.array.isRequired,
};
