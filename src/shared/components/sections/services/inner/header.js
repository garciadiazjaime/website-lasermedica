import React from 'react';
const style = process.env.TIER === 'FE' ? require('./style2.scss') : {};

export default class Header extends React.Component {

  render() {
    const { classes, texts } = this.props.data;

    return (<div className={'container-fluid ' + style[classes.class1]}>
      <div className="row">
          <div className={'col-xs-10 col-xs-offset-1 col-sm-8 col-sm-offset-2 ' + style.heightFix}>
                <h1 className={style.title}>{texts.text1}</h1>
            </div>
          </div>
        </div>);
  }
}

Header.propTypes = {
  data: React.PropTypes.object.isRequired,
};
