import React from 'react';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block3 extends React.Component {

  render() {
    const { texts } = this.props.data;
    return (<div className={style.blockWrapper1}>
        <div className="container-fluid">
          <div className="row">
            <div className={'col-xs-12 col-sm-8 col-sm-offset-2 ' + style.heightFixer}>
              <h2 className={style.title8}>{texts.text1}</h2>
            </div>
          </div>
        </div>
      </div>);
  }
}

Block3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
