import React from 'react';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Addresses extends React.Component {

  renderAddress(item, index) {
    return (<div className="col-xs-12 col-sm-3" key={index}>
      <div className="Wrapper1">
        <div className="Title1">
          {item.title}
        </div>
        <p className="Paragraph1">
          {item.tel}
        </p>
      </div>
    </div>);
  }

  render() {
    const items = this.props.data.map((item, index) => {
      return this.renderAddress(item, index);
    });

    return (<div>{items}</div>);
  }
}

Addresses.propTypes = {
  data: React.PropTypes.object,
};
