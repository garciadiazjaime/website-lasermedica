import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Address extends React.Component {

  renderDoctors(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index}>
          <Link to={item.href} title={item.title}>
            {item.title}
          </Link>
        </div>);
      });
    }
    return null;
  }

  render() {
    const { changeLocation, data, locationSelected } = this.props;
    const { texts, doctors, id } = data;
    const className = locationSelected === id ? style.active : '';
    return (<div className={(style.locationItem || '') + ' ' + className}>
        <h2 className="" onClick={changeLocation} id={id}>{texts.text1}</h2>

        <p>{texts.text2}</p>

        <p>{texts.text3}</p>

        <p>
          <span>{texts.text4}</span><span>{texts.text5}</span>
        </p>

        {this.renderDoctors(doctors)}
      </div>
    );
  }

}

Address.propTypes = {
  data: React.PropTypes.object.isRequired,
  changeLocation: React.PropTypes.func.isRequired,
  locationSelected: React.PropTypes.string.isRequired,
};
