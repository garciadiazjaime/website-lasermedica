import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

// **************** Services > General Menu ******************************
export default class Template3 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className={'col-xs-12 col-sm-4 ' + style.wr8}>
      <div className="row">
      <Link to={data.href} title={data.title} className={style.btn6 + ' ' + style[data.className]}>
          <span>{data.title}</span>
        </Link>
      </div>
    </div>);
  }
}

Template3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
