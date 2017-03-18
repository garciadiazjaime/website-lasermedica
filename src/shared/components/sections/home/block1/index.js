import React from 'react';

import Carousel from '../../../elements/carousel';
import Repeat from '../../../elements/repeat';
import Template from '../../../templates/template1';
import data from './data';

export default class Block1 extends React.Component {

  render() {
    const { meta, slides } = data.carousels.carousel1;
    return (<div>
        <Carousel data={meta}>
          <Repeat data={slides} Template={Template} className="carousel-inner" />
        </Carousel>
      </div>);
  }
}
