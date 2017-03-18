import React from 'react';
import { Link } from 'react-router';

import data from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class Block5 extends React.Component {

  render() {
    const { texts, links } = data[locationUtil.getLang()];
    return (<div className="container-fluid">
      <div className={'row ' + style.wr6}>
          <div className="col-xs-12 col-sm-5 col-sm-offset-2">
            <h3 className={style.title9}>{texts.text1}</h3>
          </div>
          <div className="col-xs-12 col-sm-4 col-sm-offset-1">
            <Link className={style.btn4blue} to={links.link1.href} title={links.link1.title}>
              {links.link1.title}
            </Link>
          </div>
        </div>
      </div>);
  }
}
