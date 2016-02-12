import React from 'react';

import Form1 from '../forms/form1';
import Form2 from '../forms/form2';


export default class Block1 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<div className="container-fluid">
      <div className="col-xs-12 col-sm-6">
        <h2>{texts.text7}</h2>
        <p>{texts.text8}</p>
        <Form1 />
      </div>
      <div className="col-xs-12 col-sm-6">
        <h2>{texts.text3}</h2>
        <p>{texts.text4}</p>
        <Form2 />
      </div>
    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
