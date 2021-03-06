import React from 'react';
import _ from 'lodash';
import sanitize from '../../../../utils/sanitize';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Template extends React.Component {

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<p key={index} className={style.par2} dangerouslySetInnerHTML={sanitize(item)} />);
      });
    }
  }

  render() {
    const { className, data } = this.props;
    const { texts, classes } = data;
    return (<div className={'row ' + style[className]}>
      <div className={style[classes.class1] + ' img-responsive'} />
      <div className={style.pad0_60}>
        <h2 className={style.title5}>{texts.text1}</h2>
        <h3 className={style.title6}>{texts.text2}</h3>

        <p className={style.paragraph3}>
          {texts.text3}
        </p>

        {this.renderContent(texts.text4)}
      </div>
    </div>);
  }
}

Template.propTypes = {
  data: React.PropTypes.object.isRequired,
  className: React.PropTypes.string,
};
