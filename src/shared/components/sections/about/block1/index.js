import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Template from '../../../templates/template2';

export default class Block1 extends React.Component {

  render() {
    return (<div>
        <Template data={this.props.data} index={0} />
      </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
