import React from 'react';

import Carousel from '../../../elements/carousel';
import Repeat from '../../../elements/repeat';
import Template from '../../../templates/template1';
import data from './data';
import locationUtil from '../../../../utils/locationUtil';

export default class Block1 extends React.Component {

  render() {
    const { meta, slides } = data[locationUtil.getLang()].carousels.carousel1;
    return (<div>
        <Carousel data={meta}>
          <Repeat data={slides} Template={Template} className="carousel-inner" />
        </Carousel>
      </div>);
  }
}
