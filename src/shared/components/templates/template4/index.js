/* eslint max-len: [2, 1000, 4] */
import React from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import Repeat from '../../elements/repeat';
import Template5 from '../template5';
import dbData from './data';
import locationUtil from '../../../utils/locationUtil';

const style = process.env.TIER === 'FE' ? require('./style.scss') : {};

// **************** Services Blocks rendered on Service Landing Page
export default class Template4 extends React.Component {

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<p className={style.par2} key={index}>
          {item}
        </p>);
      });
    }
  }

  renderServiceChild(data, serviceURL) {
    switch (_.isString(data.type) && data.type.toUpperCase()) {
      case 'TITLE':
        return (<div className="row">
          <div className={'col-sm-7 ' + style.pad45}>
            <h2 className={style.title11 + ' ' + style[data.className]}>
              {data.title}
            </h2>
          </div>
        </div>);
      case 'LIST':
        const { classes, texts, href, children } = data;
        const content = dbData[locationUtil.getLang()];
        const childrenData = children.map((item) => {
          return {
            title: item.title,
            href: [serviceURL + item.href].join(''),
          };
        });
        return (<div className="row">
            <div className={'col-xs-12 col-sm-7 ' + style.pad45}>
              <div className={style[classes.class1] + ' ' + style.service + ' img-responsive'}>
              </div>
              { this.renderContent(texts) }
              <Link to={content.links.link1 + href} title={content.texts.text1} className={style[classes.class2]}>
                {content.texts.text1}
              </Link>
            </div>
            <div className="col-xs-12 col-sm-5 col-sm-offset-0">
              <div className={'row ' + style[classes.class3] + ' ' + style.pad45}>
                <Repeat data={childrenData} Template={Template5} />
              </div>
            </div>
            <div className="col-xs-12">
              <hr className={style.hr}/>
            </div>
          </div>);
      default:
        return null;
    }
  }

  renderBlock(data, href) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (<div key={index} className="container-fluid">
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
