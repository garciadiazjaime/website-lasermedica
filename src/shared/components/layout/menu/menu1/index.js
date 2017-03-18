/* eslint max-len: [2, 500, 4] */

import React from 'react';
import { Link } from 'react-router';
import locationUtil from '../../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class MainMenu extends React.Component {

  constructor(args) {
    super(args);
    const { location } = this.props;
    locationUtil.setLocation(location.pathname);
  }

  getItems(data, lang) {
    return data.map((item, index) => {
      const { title, url } = item;
      const elementID = url.replace('/', '');
      const className = style.navbarNavAnchor;
      return item.lang === lang ? (
        <li key={index}>
          <Link to={url} className={className} id={elementID}>{title}</Link>
        </li>
      ) : null;
    });
  }

  getIcons(data) {
    return data.map((item) => {
      return (<li key={item.id}>
          <a href={item.url} className={style[item.title]} id={item.url} target="_blank" />
        </li>
      );
    });
  }

  render() {
    /*eslint-disable */
    return (<nav className={style.navbarDefault + ' navbar navbar-default'} id="menu_wrapper">
            <div className="container-fluid">
              <div className={style.navbarHeader + ' navbar-header'}>
                <button type="button" className="navbar-toggle collapsed menu_trigger" data-toggle="collapse" data-target="#mainmenu" aria-expanded="false">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <Link className={style.navbarBrand + ' navbar-brand'} to={locationUtil.getBaseUrl()} />
              </div>

              <div className={style.navbarCollapse + ' collapse navbar-collapse'} id='mainmenu'>
                <ul className={style.lang}>
                  <li><a href={locationUtil.getSpanishLocation()} title="">ES</a></li>
                  <li><span>/</span></li>
                  <li><a href={locationUtil.getEnglishLocation()} title="">EN</a></li>
                </ul>
                <ul className={style.socialNetwork}>
                  {this.getIcons(this.props.icons)}
                </ul>
                <ul className={style.navbarNav + ' nav navbar-nav'}>
                  {this.getItems(this.props.items, locationUtil.getLang())}
                </ul>
              </div>
            </div>
        </nav>);
    /*eslint-enable */
  }
}

MainMenu.propTypes = {
  items: React.PropTypes.array.isRequired,
  icons: React.PropTypes.array,
  location: React.PropTypes.any,
};
