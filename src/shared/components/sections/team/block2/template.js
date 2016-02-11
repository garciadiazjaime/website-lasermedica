import React from 'react';
import _ from 'lodash';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Template extends React.Component {

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<p key={index}>
          {item}
        </p>);
      });
    }
  }

  render() {
    const { className, data } = this.props;
    const { texts, classes } = data;
    return (<div className={style[className] || ''}>
      <div className={style[classes.class1]} />

      <h2>{texts.text1}</h2>
      <h3>{texts.text2}</h3>

      <p>
        {texts.text3}
      </p>

      {this.renderContent(texts.text4)}
    </div>);
  }
}

Template.propTypes = {
  data: React.PropTypes.object.isRequired,
  className: React.PropTypes.string,
};
