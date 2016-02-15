/* eslint max-len: [2, 500, 4] */

import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Template1 extends React.Component {

  render() {
    const { classes, texts, links } = this.props.data;
    const statusClass = this.props.index ? 'active' : null;
    const className = ['item', style[classes.class1], statusClass].join(' ');

    return (<div className={className}>
        <div className="container-fluid">
          <div className="row">
            <div className={'col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 col-md-10px col-md-10-offset-1 ' + style.heightFix}>
              <div className={style.vCenter}>
                <h1 className={style.title}>{texts.text1}</h1>
                <Link to={links.link1.href} title={links.link1.title} className={style.btn1}>
                  {links.link1.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
    </div>);
  }
}

Template1.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.number,
};
