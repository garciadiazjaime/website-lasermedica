import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Wrapper1 extends React.Component {

  render() {
    return (
      <div className={'row ' + style[this.props.className]}>
        {this.props.children}
      </div>
    );
  }
}

Wrapper1.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
};
