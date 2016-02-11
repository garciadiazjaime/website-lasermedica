import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block4 extends React.Component {

  render() {
    const { texts, classes } = this.props.data;
    return (<div className="container-fluid">

        <div className="col-xs-12 col-sm-6">
          <div className={style[classes.class1]} />
        </div>

        <div className="col-xs-12 col-sm-6">
          <h3>{texts.text1}</h3>
          <h2>{texts.text2}</h2>
          <p>
            {texts.text3}
          </p>

          <h3>{texts.text4}</h3>
          <div className="col-xs-12 col-sm-4">
            <ul>
              <li>{texts.text5}</li>
              <li>{texts.text6}</li>
              <li>{texts.text7}</li>
            </ul>
          </div>
          <div className="col-xs-12 col-sm-4">
            <ul>
              <li>{texts.text8}</li>
              <li>{texts.text9}</li>
            </ul>
          </div>
        </div>

      </div>);
  }
}

Block4.propTypes = {
  data: React.PropTypes.object.isRequired,
};
