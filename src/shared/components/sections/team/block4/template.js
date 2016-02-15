import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Template extends React.Component {

  render() {
    const { texts, classes } = this.props.data;
    return (<div className="col-xs-12 col-sm-6">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <div className={style[classes.class1] + ' ' + style.image} />
        </div>
        <div className="col-xs-12 col-sm-6">
          <div className="team-item">
            <h2 className={style.title9}>{texts.text1}</h2>
            <hr />
            <h3 className={style.title10}>{texts.text2}</h3>
          </div>
        </div>
      </div>
    </div>);
  }
}

Template.propTypes = {
  data: React.PropTypes.object.isRequired,
};
