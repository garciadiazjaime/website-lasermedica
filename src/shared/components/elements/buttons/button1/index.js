import React from 'react';
import { Link } from 'react-router';

const style = process.env.NODE_ENV === 'DEV' ? require('./style.scss') : {};
import sanitize from '../../../../utils/sanitize';


export default class Button1 extends React.Component {

  render() {
    const { data, href, title, className, type } = this.props;
    const children = data ? sanitize(data) : this.props.children;
    return !type ? (
      <Link className={style[className]} to={href} title={title}>
        {
          data ?
          <div className={style.title} dangerouslySetInnerHTML={children} />
          : <div className={style.title}>{this.props.children}</div>
        }
      </Link>
    ) : (<a className={style[className]} href={href} title={title} target="_blank">
      {this.props.children}
    </a>);
  }
}

Button1.propTypes = {
  children: React.PropTypes.any,
  className: React.PropTypes.string,
  href: React.PropTypes.string.isRequired,
  title: React.PropTypes.string.isRequired,
  data: React.PropTypes.string,
  type: React.PropTypes.string,
};
