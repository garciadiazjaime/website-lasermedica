import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class HomeCarouselTemplate extends React.Component {

  render() {
    const { classes, texts, links } = this.props.data;
    const statusClass = this.props.index ? 'active' : null;
    const className = ['item', style[classes.class1], statusClass].join(' ');

    return (<div className={className}>
        <div className="container-fluid">
          <div className="row">
<div className="col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-10px col-md-10-offset-1">
              <h1>{texts.text1}</h1>
              <Link to={links.link1.href} title={links.link1.title} className={style.btn1}>
                {links.link1.title}
              </Link>
            </div>
          </div>
        </div>
    </div>);
  }
}

HomeCarouselTemplate.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
};
