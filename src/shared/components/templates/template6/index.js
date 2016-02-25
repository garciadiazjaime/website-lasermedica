/* eslint max-len: [2, 500, 4] */

import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

// **************** Service Inner Carrousel
export default class Template6 extends React.Component {

  render() {
    const { classes, texts } = this.props.data;
    const statusClass = this.props.index ? 'active' : null;
    const className = ['item', style[classes.class1], statusClass].join(' ');

    return (<div className={}>
      <div className="row">
            <div className={'col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 ' + style.heightFix}>
                <h1 className={style.title}>{texts.text1}</h1>
            </div>
          </div>
        </div>);
  }
}

Template6.propTypes = {
  data: React.PropTypes.object.isRequired,
  index: React.PropTypes.number,
};
