/* eslint max-len: [2, 600, 4] */
import React from 'react';
import _ from 'lodash';
import Address from './address';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Location extends React.Component {

  constructor(...args) {
    super(...args);
    this.changeLocation = this.changeLocation.bind(this);
    this.state = {
      location: 'locationTijuana',
    };
  }

  changeLocation(element) {
    this.setState({
      location: element.target.id,
    });
  }

  renderLocations(data, locationSelected) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<Address data={item} key={index} index={index} changeLocation={this.changeLocation} locationSelected={locationSelected}/>);
      }, this);
    }
    return null;
  }

  renderMap(data, texts) {
    if (!_.isEmpty(data)) {
      return (<div className={style[data.className]}>
        <a href={data.href} target="_blank">
          {texts.text2}
        </a>
      </div>
      );
    }
    return null;
  }

  render() {
    const { texts, locations, maps } = this.props.data;
    const { location } = this.state;
    return (<div className={'row ' + style.locationWrapper}>
        <div className="col-sm-6">
          <h2>{texts.text1}</h2>
          {this.renderLocations(locations, location)}
        </div>
        <div className="col-sm-6 hidden-xs">
          <div className="row">
            {this.renderMap(maps[location], texts)}
          </div>
        </div>
      </div>);
  }
}

Location.propTypes = {
  data: React.PropTypes.object.isRequired,
};
