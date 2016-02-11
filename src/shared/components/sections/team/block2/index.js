import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Template from './template';

export default class Block2 extends React.Component {

  render() {
    const { texts, template } = this.props.data;
    return (<div className="container-fluid">

        <div className="col-xs-12 col-sm-6">
          <Template data={template[0]} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <h2>{texts.text1}</h2>
          <Template data={template[1]} className="wr6" />
        </div>

      </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
