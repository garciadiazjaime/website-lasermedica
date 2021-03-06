import React from 'react';

import data from './data';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

export default class Block4 extends React.Component {

  render() {
    const { texts, classes } = data[locationUtil.getLang()];
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className={style[classes.class1] + ' img-responsive'} />
        </div>

        <div className="col-xs-12 col-sm-6">
          <div className={'row ' + style.pad45}>
            <h3 className={style.title5}>{texts.text1}</h3>
            <h2 className={style.title6}>{texts.text2}</h2>
            <p className={style.par2}>
              {texts.text3}
            </p>

            <h3 className={style.title5}>{texts.text4}</h3>
            <br />
            <div className="col-xs-6 col-sm-5">
              <div className="row">
                <ul className={style.bluelist}>
                  <li>{texts.text5}</li>
                  <li>{texts.text6}</li>
                  <li>{texts.text7}</li>
                </ul>
              </div>
            </div>
            <div className="col-xs-6 col-sm-5">
              <div className="row">
                <ul className={style.bluelist}>
                  <li>{texts.text8}</li>
                  <li>{texts.text9}</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>);
  }
}
