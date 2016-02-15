import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Template from './template';

export default class Block2 extends React.Component {

  render() {
    const { texts, template } = this.props.data;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Template data={template[0]} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className={'row ' + style.pad0_60}>
            <p className={style.paragraph4}>{texts.text1}</p>
          </div>
          <Template data={template[1]} className="wr6" />
        </div>
      </div>
      </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
