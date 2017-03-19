import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Repeat from '../../../elements/repeat';
import Template5 from '../../../templates/template5';
import Utils from './utils';
import locationUtil from '../../../../utils/locationUtil';

export default class Body extends React.Component {

  renderTitle(data, index) {
    if (!_.isEmpty(data)) {
      return (<h2 className={data.className} key={index}>
        {data.text}
      </h2>);
    }
    return null;
  }

  renderSubtitle(data, index) {
    if (!_.isEmpty(data)) {
      return (<h3 className={data.className} key={index}>
        {data.text}
      </h3>);
    }
    return null;
  }

  renderText(data, index) {
    if (!_.isEmpty(data) && _.isString(data.text)) {
      return (<p className={style[data.className]} key={index}>
        {data.text}
      </p>);
    } else if (!_.isEmpty(data) && _.isArray(data.text)) {
      return data.text.map((item, index2) => {
        return (<p className={data.className ? style[data.className] : ''} key={index2}>
          {item}
        </p>);
      });
    }
    return null;
  }

  renderStrong(data, index) {
    if (!_.isEmpty(data)) {
      return (<p key={index} className={style[data.className]}>
        <strong>{data.text}</strong>
      </p>);
    }
    return null;
  }

  renderImage(data, index) {
    if (!_.isEmpty(data)) {
      return (<img className={data.className} src={data.src} alt={data.alt} key={index}/>);
    }
    return null;
  }

  renderList(data, index) {
    if (data && _.isArray(data.items) && data.items.length) {
      const itemsEl = data.items.map((item, index2) => {
        return (<li key={index2}>{item}</li>);
      });
      return itemsEl ? (<ul className={data.className} key={index}>
        {itemsEl}
      </ul>) : null;
    }
    return null;
  }

  renderListLink(data, index) {
    if (data && _.isArray(data.items) && data.items.length) {
      const itemsEl = data.items.map((item, index2) => {
        return (<li key={index2}>
          <Link to={item.href} title={item.title}>{item.title}</Link>
        </li>);
      });
      return itemsEl ? (<ul className={data.className} key={index}>
        {itemsEl}
      </ul>) : null;
    }
    return null;
  }

  renderLink(data, index) {
    if (!_.isEmpty(data)) {
      return (<Link className={style[data.className]} to={data.href} key={index}>
        {data.text}
      </Link>);
    }
    return null;
  }

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        switch (item.type.toUpperCase()) {
          case 'TITLE':
            return this.renderTitle(item, index);
          case 'SUBTITLE':
            return this.renderSubtitle(item, index);
          case 'TEXT':
            return this.renderText(item, index);
          case 'STRONG':
            return this.renderStrong(item, index);
          case 'IMAGE':
            return this.renderImage(item, index);
          case 'LIST_LINK':
            return this.renderListLink(item, index);
          case 'LIST':
            return this.renderList(item, index);
          case 'LINK':
            return this.renderLink(item, index);
          default:
            return null;
        }
      });
    }
  }

  renderControls(data, service) {
    // todo: improve texts and ternary
    const controls = Utils.getPrevNext(data, service);
    const controlTitles = locationUtil.getLang() === 'ES' ? {
      back: 'Anterior',
      next: 'Siguiente',
    } : {
      back: 'Back',
      next: 'Next',
    };
    return (<div>
      {
        controls.prev ?
        (<Link className="" to={controls.prev} title="anterior">
          {controlTitles.back}
        </Link>) : (<span>
          {controlTitles.back}
        </span>)
      }
      {
        controls.next ?
        (<Link className="" to={controls.next} title="siguiente">
          {controlTitles.next}
        </Link>) : (<span>
          {controlTitles.next}
        </span>)
      }
    </div>);
  }

  render() {
    const { data, menuItems, service, category, common } = this.props;
    const serviceId = service && service.indexOf('/') !== -1 ? service.replace('/', '') : null;
    const { classes } = common;
    const listTitle = locationUtil.getLang() === 'ES' ? 'Menú de Servicios' : 'Services Menu';
    return (<div className="container-fluid" id={style[category.replace('/', '')]}>
      <div className="col-xs-12 col-sm-6">
        <div className={'row ' + style.pad45}>
          <Link className={style.btn9} to="/servicios" title="servicios">
            {listTitle}
          </Link>
          <div className={style[classes.class2]}>
            <Repeat data={menuItems} Template={Template5} />
          </div>
        </div>
      </div>

      <div className="col-xs-12 col-sm-6">
        <div className="row">
          <div className={style['serviceControl_' + category.replace('/', '')]}>
            {this.renderControls(menuItems, service)}
            <div className="clearfix" />
          </div>
          <div className={style.service_content} id={serviceId}>
            {this.renderContent(data)}
          </div>
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
