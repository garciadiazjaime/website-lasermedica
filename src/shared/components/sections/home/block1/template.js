import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class HomeCarouselTemplate extends React.Component {

  render() {
    const { classes, texts, links } = this.props.data;
    const statusClass = this.props.index ? 'active' : null;
    const className = ['item', style[classes.class1], statusClass].join(' ');

    return (<div className={className}>
      <div>
        <h2>{texts.text1}</h2>
        <Link to={links.link1.href} title={links.link1.title}>
          {links.link1.title}
        </Link>
      </div>
    </div>);
  }
}

HomeCarouselTemplate.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
};
