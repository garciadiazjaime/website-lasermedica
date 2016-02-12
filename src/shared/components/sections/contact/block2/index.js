import React from 'react';


export default class Block2 extends React.Component {

  render() {
    // const { texts } = this.props.data;
    return (<div className="container-fluid">
      <div className="col-xs-12 col-sm-6">
        block2
      </div>
      <div className="col-xs-12 col-sm-6">
        block2
      </div>
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
