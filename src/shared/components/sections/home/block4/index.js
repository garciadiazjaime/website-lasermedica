import React from 'react';

import Carousel from '../../../elements/carousel';
import Repeat from '../../../elements/repeat';
import Template from './template';
import carouselMultiItemUtil from '../../../../utils/carouselMultiItem';
import data from './data';

export default class Block4 extends React.Component {

  componentDidMount() {
    const { meta } = data.carousels.carousel1;
    carouselMultiItemUtil(meta.sliderID, 3);
  }

  render() {
    const { meta, slides } = data.carousels.carousel1;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-sm-12 col-xs-12">
          <Carousel data={meta}>
            <Repeat data={slides} Template={Template} className="carousel-inner" />
          </Carousel>
        </div>
      </div>
    </div>);
  }
}
