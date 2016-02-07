import React from 'react';

import Carousel from '../../../elements/carousel';
import Repeat from '../../../elements/repeat';
import Template from './template';
import carouselMultiItemUtil from '../../../../utils/carouselMultiItem';


export default class Block4 extends React.Component {

  componentDidMount() {
    const { meta } = this.props.data.carousels.carousel1;
    carouselMultiItemUtil(meta.sliderID, 3);
  }

  render() {
    const { meta, slides } = this.props.data.carousels.carousel1;
    return (<div className="container-fluid">
      {/* row1 */}
      <div className="col-sm-12 col-xs-12">
        <Carousel data={meta}>
          <Repeat data={slides} Template={Template} className="carousel-inner" />
        </Carousel>
      </div>
    </div>);
  }
}

Block4.propTypes = {
  data: React.PropTypes.object.isRequired,
};
