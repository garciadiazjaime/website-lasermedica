import React from 'react';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import sanitize from '../../../../utils/sanitize';

export default class Paragraph1 extends React.Component {

  render() {
    const children = this.props.data ? sanitize(this.props.data) : this.props.children;
    return this.props.data ? (
      <p className={style[this.props.className]} dangerouslySetInnerHTML={children} />
    ) : (
      <p className={style[this.props.className]}>
        {children}
      </p>
    );
  }
}

Paragraph1.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  data: React.PropTypes.string,
};
