import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class FooterTop extends React.Component {

  render() {
    const fbLink = 'https://www.facebook.com/InterbrokersSeguros/';
    return (<div className="row">
      <div className="col-xs-12 col-sm-8">
        <Link className={style.logo} to="inicio" />
      </div>
      <div className="col-xs-12 col-sm-4">
        <a className={style.facebook} href={fbLink} title="Lasermedica en Facebook" target="_blank">
          Síguenos en
        </a>
      </div>
    </div>);
  }
}
