import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block3 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<div className={style.wr4}>
      <div className="container-fluid">
        <div className={style.blockWrapper1}>
          <h2>{texts.text1}</h2>
        </div>
      </div>
    </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
