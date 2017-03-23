/* eslint max-len: [2, 600, 4] */
import React from 'react';
import { Link } from 'react-router';

import data from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Addresses extends React.Component {

  renderAddress(item, index) {
    return (<div className={style.addresses + ' col-xs-12 col-sm-3'} key={index}>
      <div>
        <h4>
          {item.title}:
        </h4>
        <p>
          {item.tel}
        </p>
      </div>
    </div>);
  }

  render() {
    const content = data[locationUtil.getLang()];
    const itemsEl = this.props.data.map((item, index) => {
      return this.renderAddress(item, index);
    });

    return (<div>
      <div className="row">
        <div className="col-xs-12">
          <Link className={style.contactBlock} to={content.links.link1} title={content.texts.title1}>
            {content.texts.text2}
          </Link>
        </div>
      </div>
      <div className="row">
        {itemsEl}
      </div>
    </div>);
  }
}

Addresses.propTypes = {
  data: React.PropTypes.array,
};
