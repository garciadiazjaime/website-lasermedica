import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block4 extends React.Component {

  render() {
    return (<div>
        block4
      </div>);
  }
}

Block4.propTypes = {
  data: React.PropTypes.object.isRequired,
};
