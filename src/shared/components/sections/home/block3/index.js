import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block3 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        {/* row1 */}
        <div className="col-sm-6 col-xs-12">
          <div className={style.image1}></div>
          <p>{texts.text1}</p>
          <p>
            {texts.text2}: <b>{texts.text3}</b>
          </p>
          <Link to={links.link1.href} title={links.link1.title}>
            {links.link1.title}
          </Link>
          <span>{texts.text4}</span>
          <p>{texts.text5}</p>
        </div>
        <div className="col-sm-6 col-xs-12">
          <div className={style.image2}></div>
        </div>
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
