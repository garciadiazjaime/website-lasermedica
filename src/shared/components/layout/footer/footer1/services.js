import React from 'react';
import { Link } from 'react-router';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Services extends React.Component {

  renderServices() {
    const data = [{
      title: 'Trámites en Estados Unidos para Transportistas',
      href: '/servicios/tramites/tramites-usa',
    }, {
      title: 'Trámites en México para Transportistas',
      href: '/servicios/tramites/tramites-mx',
    }, {
      title: 'Trámite de Placas en DMV - Estados Unidos',
      href: '/servicios/tramites/placas-dmv',
    }, {
      title: 'Trámite de Placas en  SCT - México',
      href: '/servicios/tramites/placas-sct',
    }, {
      title: 'Permisos para Transportistas en Estados Unidos',
      href: '/servicios/permisos/permisos-usa',
    }, {
      title: 'Permisos y Servicios para Nuevos Entrantes',
      href: '/servicios/permisos/permisos-otros',
    }, {
      title: 'Seguros para Vehículos Comerciales en Estados Unidos',
      href: '/servicios/seguros/seguros-usa',
    }, {
      title: 'Seguros para Vehículos Comerciales en México',
      href: '/servicios/seguros/seguros-mx',
    }, {
      title: 'Consultoría y Servicio de Auditorias para Empresas Transportistas',
      href: '/servicios/consultoria/mx-usa',
    }];

    return data.map((item, index) => {
      return (<Link className="o" to={item.href} title={item.title} key={index}>
        {item.title}
      </Link>);
    });
  }

  render() {
    return (<div className="row">
      <div className="title1">
        Servicios
      </div>
      {this.renderServices()}
    </div>);
  }
}
