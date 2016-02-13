import React from 'react';
import { Link } from 'react-router';

// **************** Menu List used on Service Page
export default class Template7 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className={data.className}>
        <Link to={data.href} className="" title={data.title}>
          {data.title}
        </Link>
      </div>);
  }
}

Template7.propTypes = {
  data: React.PropTypes.object.isRequired,
};
