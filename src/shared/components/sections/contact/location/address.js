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
    const { changeLocation, data, locationSelected, index } = this.props;
    const { texts, doctors, id } = data;
    const className = locationSelected === id ? style.active : '';
    return (<div className={(style.locationItem || '') + ' ' + className}>
        { index > 0 ? <br /> : null }

        <h3 onClick={changeLocation} id={id}>{texts.text1}</h3>
        <i className="glyphicon glyphicon-menu-right" />

        <h4>{texts.text2}</h4>

        <p>{texts.text3}</p>

        <p>
          <span>{texts.text4}</span><strong>{texts.text5}</strong>
        </p>

        {this.renderDoctors(doctors)}

        { index < 2 ? <div className={style.borderBottom} /> : null }
      </div>
    );
  }

}

Address.propTypes = {
  data: React.PropTypes.object.isRequired,
  changeLocation: React.PropTypes.func.isRequired,
  locationSelected: React.PropTypes.string.isRequired,
  index: React.PropTypes.number.isRequired,
};
