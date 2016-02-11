import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block5 extends React.Component {

  render() {
    const { texts, links, classes } = this.props.data;
    return (<div className="container-fluid">

        <div className="col-xs-12 col-sm-12">
          <h3>{texts.text1}</h3>
          <h2>{texts.text2}</h2>
        </div>

        <div className="col-xs-12 col-sm-6">
          <p>
            {texts.text3}
          </p>
          <Link to={links.link1.href} title={links.link1.title}>
            {links.link1.title}
          </Link>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className={style[classes.class1]} />
        </div>

        <div className="col-xs-12 col-sm-6">
          <p>
            {texts.text4}
          </p>
          <Link to={links.link2.href} title={links.link2.title}>
            {links.link2.title}
          </Link>
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className={style[classes.class2] + ' here'}>
            <h2>{texts.text5}</h2>
            <Link to={links.link3.href} title={links.link3.title}>
              {links.link3.title}
            </Link>
            <Link to={links.link4.href} title={links.link4.title}>
              {links.link4.title}
            </Link>
            <Link to={links.link5.href} title={links.link5.title}>
              {links.link5.title}
            </Link>
          </div>
        </div>

      </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
