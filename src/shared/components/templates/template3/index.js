import React from 'react';
import { Link } from 'react-router';

// **************** Services > General Menu ******************************
export default class Template3 extends React.Component {

  render() {
    const { data } = this.props;
    return (<div className="col-xs-12 col-sm-4">
        <h2>{data.title}</h2>
        <Link to={'/' + data.href} title={data.title}>
          {data.title}
        </Link>
    </div>);
  }
}

Template3.propTypes = {
  data: React.PropTypes.object.isRequired,
};
