import React from 'react';
const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};


export default class Image1 extends React.Component {

  render() {
    return (
      <img className={style[this.props.className]} src={this.props.src} alt={this.props.alt} />
    );
  }
}

Image1.propTypes = {
  className: React.PropTypes.string,
  src: React.PropTypes.string.isRequired,
  alt: React.PropTypes.string.isRequired,
};
