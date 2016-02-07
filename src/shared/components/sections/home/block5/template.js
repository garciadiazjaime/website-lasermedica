import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class HomeCarouselTemplate extends React.Component {

  render() {
    const { title, href, className } = this.props.data;

    return (<div className="col-sm-3 col-xs-12">
      <div className={style.wrapper5}>
        <div className={style[className]}>
          <h2>{title}</h2>
          <Link to={href} title={title}>
            {title}
          </Link>
        </div>
      </div>
    </div>);
  }
}

HomeCarouselTemplate.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.number.isRequired,
};
