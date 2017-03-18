import React from 'react';

import Repeat from '../../../elements/repeat';
import Template from './template';
import data from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class Block5 extends React.Component {

  render() {
    const { items, texts } = data[locationUtil.getLang()];
    return (<div className="container-fluid">
      <div className={'row ' + style.pad45} >
        <h3 className={style.title5}>{texts.text1}</h3>
        <h2 className={style.title6}>{texts.text2}</h2>
      </div>
      <div className="row">
        <Repeat data={items} Template={Template} />
      </div>
      </div>);
  }
}
