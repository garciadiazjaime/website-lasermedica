import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Repeat from '../../../elements/repeat';
import Template from './template';


export default class Block4 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="container-fluid">
        <Repeat Template={Template} data={data} />
      </div>);
  }
}

Block4.propTypes = {
  data: React.PropTypes.array.isRequired,
};
