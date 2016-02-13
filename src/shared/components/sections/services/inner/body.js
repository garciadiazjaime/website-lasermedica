import React from 'react';
import _ from 'lodash';

import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Button1 from '../../../elements/buttons/button1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';

import Engine1 from '../../../engines/engine1';
import Template4 from '../../../templates/template4';
import Utils from './utils';

export default class Body extends React.Component {

  renderContent(data) {
    const { texts, links } = data;
    let textsEl;
    let linksEl;

    if (_.isArray(texts) && texts.length) {
      textsEl = texts.map((item, index) => {
        return index === 0 ?
        (<Title1 className="q" key={index}>
          {item}
        </Title1>) :
        (<Paragraph1 className="i" key={index} data={item} />);
      });
    }

    if (_.isArray(links) && links.length) {
      linksEl = links.map((item, index) => {
        return (<div key={index}>
          <Button1 className={item.className} href={item.href} title={item.title} key={index}>
          {item.title}
        </Button1>
      </div>);
      });
    }

    return (<div>
      {textsEl}
      {linksEl}
      </div>);
  }

  renderMenu(data, rootUrl) {
    let itemsEl;
    if (_.isArray(data) && data.length) {
      itemsEl = data.map((item, index) => {
        return (<li key={index}>
            <Button1 href={[rootUrl, item.href].join('/')} title={item.title}>
              {item.title}
            </Button1>
          </li>);
      });
    }
    return (<ul>
        {itemsEl}
      </ul>);
  }

  renderControls(data, service) {
    const controls = Utils.getPrevNext(data, service);
    return (<div>
      {
        controls.prev ?
        (<Button1 className="snb1" href={'/' + controls.prev} title="anterior">
          Anterior
        </Button1>) : (<Button1 className="snb1d" href={'/' + controls.prev} title="anterior">
          Anterior
        </Button1>)
      }
      {
        controls.next ?
        (<Button1 className="snb2" href={'/' + controls.next} title="siguiente">
          Siguiente
        </Button1>) : (<Button1 className="snb2d" href={'/' + controls.next} title="siguiente">
          Siguiente
        </Button1>)
      }
    </div>);
  }

  render() {
    const { data, menuItems, service } = this.props;
    return (<div className="container-fluid" id={service}>
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="c">
            <Button1 className="stm" href="/servicios" title="servicios">
              Menú de Servicios
            </Button1>
            <Engine1 data={menuItems} Template={Template4} />
          </Wrapper1>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="cb">
            {this.renderControls(menuItems, service)}
          </Wrapper1>
          {this.renderContent(data)}
        </div>
      </div>);
  }
}

Body.propTypes = {
  data: React.PropTypes.object.isRequired,
  menuItems: React.PropTypes.array.isRequired,
  service: React.PropTypes.string,
};
