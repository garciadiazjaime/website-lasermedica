/* eslint max-len: [2, 500, 4] */
import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class HomeBrandsTemplate extends React.Component {

  render() {
    const { classes } = this.props.data;
    const statusClass = !this.props.index ? 'active' : null;
    const className = ['item', statusClass].join(' ');

    return (<div className={className + ' ' + style.item} key={this.props.index}>
        <div className={style[classes.class1]} />
    </div>);
  }
}

HomeBrandsTemplate.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
};
