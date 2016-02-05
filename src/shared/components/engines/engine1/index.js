import React from 'react';
import _ from 'lodash';


export default class Engine1 extends React.Component {

  renderElement(data, Template) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<Template data={item} key={index} />);
      });
    }
  }

  render() {
    const { data, Template } = this.props;
    return (<div>
      {this.renderElement(data, Template)}
    </div>);
  }
}

Engine1.propTypes = {
  data: React.PropTypes.array.isRequired,
  Template: React.PropTypes.any,
};
