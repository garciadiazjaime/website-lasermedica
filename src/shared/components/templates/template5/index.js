import React from 'react';
import { Link } from 'react-router';


// **************** Services List Iten rendered on Services Landing Page
export default class Template5 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className={data.className}>
        <Link to={data.href} title={data.title}>
          {data.title}
        </Link>
      </div>);
  }
}

Template5.propTypes = {
  data: React.PropTypes.object.isRequired,
};
