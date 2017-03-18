import React from 'react';

import Template from './template';
import data from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class Block2 extends React.Component {

  render() {
    const { texts, template } = data[locationUtil.getLang()];
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Template data={template[0]} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className={'row ' + style.pad0_60}>
            <p className={style.paragraph4}>{texts.text1}</p>
          </div>
          <Template data={template[1]} className="wr6" />
        </div>
      </div>
      </div>);
  }
}
