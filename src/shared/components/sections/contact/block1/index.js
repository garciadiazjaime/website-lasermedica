import React from 'react';

import Form1 from '../forms/form1';
import Form2 from '../forms/form2';
import data from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block1 extends React.Component {

  render() {
    const { texts } = data[locationUtil.getLang()];
    return (<div className="container-fluid">
      <div className="col-xs-12 col-sm-6">
        <div className="row">
          <div className={style.wr4}>
            <h2>{texts.text1}</h2>
            <p>{texts.text2}</p>
            <Form1 />
          </div>
        </div>
      </div>
      <div className="col-xs-12 col-sm-6">
        <div className="row">
          <div className={style.localWrapper1}>
            <h2>{texts.text3}</h2>
            <p>{texts.text4}</p>
            <Form2 />
          </div>
        </div>
      </div>
    </div>);
  }
}
