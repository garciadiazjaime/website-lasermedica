import React from 'react';

import Repeat from '../../../elements/repeat';
import Template3 from '../../../templates/template3';


export default class Block2 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-10 col-sm-offset-1">
          <div className="row">
            <Repeat data={data} Template={Template3} />
          </div>
        </div>
      </div>
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.array.isRequired,
};
