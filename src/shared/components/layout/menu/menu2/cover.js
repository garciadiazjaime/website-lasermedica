import React from 'react';
import { Link } from 'react-router';

import locationUtil from '../../../../utils/locationUtil';
import dataTexts from './data';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class Cover extends React.Component {

  renderServices(data) {
    const texts = dataTexts[locationUtil.getLang()];
    return data.map((item, index) => {
      return (<div className="col-sm-3" key={index}>
        <div className="row">
          <div className={'service_cover ' + style['service_' + index]} data-index={index}>
            <h2 data-index={index}>{item.title}</h2>
            <Link to={item.href} title={item.title} data-index={index}>{texts.texts.text3}</Link>
          </div>
        </div>
      </div>);
    });
  }

  render() {
    const { data } = this.props;
    return (<div>
      {this.renderServices(data)}
    </div>);
  }
}

Cover.propTypes = {
  data: React.PropTypes.array.isRequired,
};
