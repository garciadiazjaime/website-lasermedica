import React from 'react';

import sanitize from '../../../../utils/sanitize';
import data from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class Block2 extends React.Component {

  render() {
    const { texts, classes } = data[locationUtil.getLang()];
    return (<div className="container-fluid">
        <div className="row">
          <div className={'col-xs-12 ' + style.pad45}>
            <h2 className={style.title5}>{texts.text1}</h2>
            <h1 className={style.title6}>{texts.text2}</h1>
          </div>
        </div>
        <div className={'row ' + style.wr6}>
          <div className={'col-xs-12 col-sm-6 ' + style.pad50_75_40_45}>
            <p className={style.par2} dangerouslySetInnerHTML={sanitize(texts.text3)} />
            <p className={style.par2}>
              {texts.text4}
            </p>
            <p className={style.par2}>
              {texts.text5}
            </p>
          </div>
          <div className="col-xs-12 col-sm-6">
            <div className="row">
              <div className={style[classes.class1]} />
              <p className={style.paragraph3}>
                {texts.text6}<br />
                {texts.text7}
              </p>
            </div>
          </div>
        </div>
      </div>);
  }
}
