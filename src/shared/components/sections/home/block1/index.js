import React from 'react';

import Carousel from '../../../elements/carousel';
import Repeat from '../../../elements/repeat';
import Template from '../../../templates/template1';

// const style = process.env.TIER === 'FE' ? require('./style.scss') : {};


export default class Block1 extends React.Component {

  render() {
    const { meta, slides } = this.props.data.carousels.carousel1;
    return (<div>
        <Carousel data={meta}>
          <Repeat data={slides} Template={Template} className="carousel-inner" />
        </Carousel>
      </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
