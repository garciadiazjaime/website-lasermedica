import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block5 extends React.Component {

  render() {
    return (<div>
        block5
      </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
