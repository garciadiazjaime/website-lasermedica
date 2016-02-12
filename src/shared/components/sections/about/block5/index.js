import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block5 extends React.Component {

  render() {
    const { texts, links, classes } = this.props.data;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-12">
          <div className={'row ' + style.pad45}>
            <h3 className={style.title5}>{texts.text1}</h3>
            <h2 className={style.title6}>{texts.text2}</h2>
          </div>
        </div>
      </div>
      <div className={'row ' + style.wr6}>
        <div className="col-xs-12 col-sm-6">
          <div className={'row ' + style.pad50_45_0}>
            <p className={style.par2}>
              {texts.text3}
            </p>
            <Link to={links.link1.href} title={links.link1.title} className={style.btn4blue}>
              {links.link1.title}
            </Link>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className={style[classes.class1]} />
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className={'row ' + style.pad100_45_0}>
            <p className={style.paragraph4}>
              {texts.text4}
            </p>
            <Link to={links.link2.href} title={links.link2.title} className={style.btn4blue}>
              {links.link2.title}
            </Link>
          </div>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className={'row ' + style[classes.class2] + ' here ' + style.pad100_120_0}>
            <h2 className={style.title2}>{texts.text5}</h2>
            <Link to={links.link3.href} title={links.link3.title} className={style.btn3}>
              {links.link3.title}
            </Link>
            <Link to={links.link4.href} title={links.link4.title} className={style.btn3}>
              {links.link4.title}
            </Link>
            <Link to={links.link5.href} title={links.link5.title} className={style.btn3}>
              {links.link5.title}
            </Link>
          </div>
        </div>
      </div>
      </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
