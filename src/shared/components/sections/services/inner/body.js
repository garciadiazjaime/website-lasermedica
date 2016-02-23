import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Repeat from '../../../elements/repeat';
import Template5 from '../../../templates/template5';
import Utils from './utils';

export default class Body extends React.Component {

  renderTitle(data) {
    if (!_.isEmpty(data)) {
      return (<h2 className={data.className}>
        {data.text}
      </h2>);
    }
    return null;
  }

  renderSubtitle(data) {
    if (!_.isEmpty(data)) {
      return (<h3 className={data.className}>
        {data.text}
      </h3>);
    }
    return null;
  }

  renderText(data) {
    if (!_.isEmpty(data)) {
      return (<p className={data.className}>
        {data.text}
      </p>);
    }
    return null;
  }

  renderStrong(data) {
    if (!_.isEmpty(data)) {
      return (<p><strong className={data.className}>
        {data.text}
      </strong></p>);
    }
    return null;
  }

  renderImage(data) {
    if (!_.isEmpty(data)) {
      return (<img className={data.className} src={data.src} alt={data.alt} />);
    }
    return null;
  }

  renderList(data) {
    if (!_.isEmpty(data)) {
      if (_.isArray(data.items) && data.items.length) {
        const itemsEl = data.items.map((item, index) => {
          return (<li key={index}>{item}</li>);
        });
        return itemsEl ? (<ul className={data.className}>
          {itemsEl}
        </ul>) : null;
      }
    }
    return null;
  }

  renderLink(data) {
    if (!_.isEmpty(data)) {
      return (<Link className={data.className} to={data.href}>
        {data.text}
      </Link>);
    }
    return null;
  }

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item) => {
        switch (item.type.toUpperCase()) {
          case 'TITLE':
            return this.renderTitle(item);
          case 'SUBTITLE':
            return this.renderSubtitle(item);
          case 'TEXT':
            return this.renderText(item);
          case 'STRONG':
            return this.renderStrong(item);
          case 'IMAGE':
            return this.renderImage(item);
          case 'LIST':
            return this.renderList(item);
          case 'LINK':
            return this.renderLink(item);
          default:
            return null;
        }
      });
    }
  }

  renderControls(data, service) {
    const controls = Utils.getPrevNext(data, service);
    return (<div>
      {
        controls.prev ?
        (<Link className="" to={controls.prev} title="anterior">
          Anterior
        </Link>) : (<span>
          Anterior
        </span>)
      }
      {
        controls.next ?
        (<Link className="" to={controls.next} title="siguiente">
          Siguiente
        </Link>) : (<span>
          Siguiente
        </span>)
      }
    </div>);
  }

  render() {
    const { data, menuItems, service, category, common } = this.props;
    const { classes } = common;
    return (<div className="container-fluid jaime" id={style[category.replace('/', '')]}>
      <div className="col-xs-12 col-sm-6">
        <div className={'row ' + style.pad45}>
          <Link className={style.btn9} to="/servicios" title="servicios">
            Menú de Servicios
          </Link>
          <div className={style[classes.class1]}>
            <Repeat data={menuItems} Template={Template5} />
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6">
        <div className={style['serviceControl_' + category.replace('/', '')]}>
          {this.renderControls(menuItems, service)}
          <div className="clearfix" />
        </div>
        <div className={style.service_content}>
          {this.renderContent(data)}
        </div>
      </div>
    </div>);
  }
}

Body.propTypes = {
  data: React.PropTypes.array.isRequired,
  menuItems: React.PropTypes.array.isRequired,
  service: React.PropTypes.string,
  category: React.PropTypes.string.isRequired,
  common: React.PropTypes.object,
};
