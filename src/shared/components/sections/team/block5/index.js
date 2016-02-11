import React from 'react';
import { Link } from 'react-router';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block5 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
        <div className={'col-xs-12 col-sm-12 ' + style.wr6}>
          <div className="col-xs-12 col-sm-6">
            <p>{texts.text1}</p>
          </div>
          <div className="col-xs-12 col-sm-6">
            <Link to={links.link1.href} title={links.link1.title}>
              {links.link1.title}
            </Link>
          </div>
        </div>
      </div>);
  }
}

Block5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
