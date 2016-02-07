import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block2 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className={ 'container-fluid ' + style.wrapper5 }>
      {/* row1 */}
      <div className="col-sm-6 col-xs-12">
        <div className={style.image1}></div>
      </div>
      <div className="col-sm-3 col-xs-12">
        <div className={style.wrapper1}>
          <h2>{texts.text2}</h2>
          <p>{texts.text3}</p>
          <Link to={links.link1.href}>{links.link1.title}</Link>
        </div>
      </div>
      <div className="col-sm-3 col-xs-12">
        <div className={style.wrapper2}>
          <h2>{texts.text5}</h2>
          <p>{texts.text6}</p>
          <Link to={links.link2.href}>{links.link2.title}</Link>
        </div>
      </div>

      {/* row2 */}
      <div className="col-sm-6 col-xs-12">
        <div className={style.wrapper3}>
          <h3>{texts.text6}</h3>
          <h2>{texts.text7}</h2>
          <p>{texts.text8}</p>
          <Link to={links.link3.href}>{links.link3.title}</Link>
        </div>
      </div>
      <div className="col-sm-3 col-xs-12">
        <div className={style.image2}></div>
      </div>
      <div className="col-sm-3 col-xs-12">
        <div className={style.wrapper4}>
          <h3>{texts.text9}</h3>
          <h2>{texts.text10}</h2>
          <Link to={links.link4.href}>{links.link4.title}</Link>
          <Link to={links.link5.href}>{links.link5.title}</Link>
          <Link to={links.link6.href}>{links.link6.title}</Link>
        </div>
      </div>

      {/* row3 */}
      <div className="col-sm-12 col-xs-12">
        <h2>{texts.text14}</h2>
      </div>
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
