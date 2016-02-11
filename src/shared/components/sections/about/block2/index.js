import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block2 extends React.Component {

  render() {
    const { texts, classes } = this.props.data;
    return (<div className="container-fluid">

        <div className="col-xs-12">
          <h2>{texts.text1}</h2>
          <h1>{texts.text2}</h1>
        </div>

        <div className={'col-xs-12 ' + style.wr6}>
            <div className="col-xs-12 col-sm-6">
              <p>
                {texts.text3}
              </p>
              <p>
                {texts.text4}
              </p>
            </div>
            <div className="col-xs-12 col-sm-6">
              <div className={style[classes.class1]} />
              <p>
                {texts.text5}
              </p>
            </div>
        </div>

      </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
