import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class HomeBrandsTemplate extends React.Component {

  render() {
    const { classes, links } = this.props.data;
    const statusClass = !this.props.index ? 'active' : null;
    const className = ['item', statusClass].join(' ');

    return (<div className={className + ' ' + style.item}>
        <Link className={style[classes.class1]} to={links.link1.href} title={links.link1.title} />
    </div>);
  }
}

HomeBrandsTemplate.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
};
