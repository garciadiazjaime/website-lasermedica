import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';


const style = process.env.TIER === 'FE' ? require('./style.scss') : {};
import Repeat from '../../elements/repeat';
import Template5 from '../template5';

// **************** Services Blocks rendered on Service Landing Page
export default class Template4 extends React.Component {

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<p key={index}>
          {item}
        </p>);
      });
    }
  }

  renderServiceChild(data, serviceURL) {
    switch (_.isString(data.type) && data.type.toUpperCase()) {
      case 'TITLE':
        return (<h2 className={data.className}>
            {data.title}
          </h2>);
      case 'LIST':
        const { classes, texts, href, children } = data;
        const childrenData = children.map((item) => {
          return {
            title: item.title,
            href: [serviceURL + item.href].join(''),
          };
        });
        return (
          <div className="row">
            <div className="col-xs-12 col-sm-6">
              <div className={style[classes.class1]}>
              </div>
              { this.renderContent(texts) }
              <Link to={'/contacto' + href} title={href}>
                AGENDAR CITA
              </Link>
            </div>
            <div className="col-xs-10 col-xs-offset-1 col-sm-6 col-sm-offset-0">
              <Repeat data={childrenData} Template={Template5} />
            </div>
          </div>
        );
      default:
        return null;
    }
  }

  renderBlock(data, href) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index}>
            {this.renderServiceChild(item, href)}
          </div>);
      });
    }
    return null;
  }

  render() {
    const { data } = this.props;
    return (<div>
      {this.renderBlock(data.children, data.href)}
    </div>);
  }
}

Template4.propTypes = {
  data: React.PropTypes.object.isRequired,
  href: React.PropTypes.any,
};
