import React from 'react';

import Location from '../location';

export default class Block2 extends React.Component {

  render() {
    return (<div className="container-fluid">
      <Location data={this.props.data} />
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
