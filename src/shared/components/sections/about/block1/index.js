import React from 'react';
// import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Template from '../../../templates/template1';

export default class Block1 extends React.Component {

  render() {
    // const { texts, links } = this.props.data;
    return (<div className={style.wrapper1}>
        <Template data={this.props.data} index={0} />
      </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
