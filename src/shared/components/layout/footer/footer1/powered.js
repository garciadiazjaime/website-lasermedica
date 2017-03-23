import React from 'react';

import dbData from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Powered extends React.Component {

  render() {
    const data = [{
      name: 'POOL',
      url: 'http://somospool.com',
      title: 'somos pool',
    }, {
      name: 'MINT',
      url: 'http://mintitmedia.com',
      title: 'Diseño y Desarrollo Web en Tijuana',
    }];
    const contents = dbData[locationUtil.getLang()];

    return (<div className={style.powered}>
        <div className="container-fluid">
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              {contents.texts.text3} &copy; Lasermedica
            </div>
            <div className="col-xs-12 col-sm-6">
              {contents.texts.text4}
              <a href={data[0].url} title={data[0].title} target="_blank">{data[0].name}</a>
              &nbsp;&nbsp;&nbsp;{contents.texts.text5}
              <a href={data[1].url} title={data[1].title} target="_blank">{data[1].name}</a>
            </div>
          </div>
        </div>
    </div>);
  }
}
