import React from 'react';
import { Link } from 'react-router';

// **************** Services List Item rendered on Services Landing Page
const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class Template5 extends React.Component {

  render() {
    const { data } = this.props;
    return (<Link className={style[data.className]} to={data.href} title={data.title}>
      {data.title}
    </Link>);
  }
}

Template5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
