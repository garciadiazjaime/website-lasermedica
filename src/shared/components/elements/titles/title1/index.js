import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import sanitize from '../../../../utils/sanitize';


export default class Title1 extends React.Component {

  render() {
    const children = this.props.data ? sanitize(this.props.data) : this.props.children;
    return this.props.data ? (
        <h2 className={style[this.props.className]} dangerouslySetInnerHTML={children} />
      ) : (
        <h2 className={style[this.props.className]}>
          {this.props.children}
        </h2>
      );
  }
}

Title1.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  data: React.PropTypes.string,
};
