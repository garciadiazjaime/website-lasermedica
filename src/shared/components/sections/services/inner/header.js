import React from 'react';

import Carousel from '../../../elements/carousel';
import Repeat from '../../../elements/repeat';
import Template from '../../../templates/template6';


export default class Header extends React.Component {

  render() {
    const { meta, slides } = this.props.data.carousel;
    return (<div className="container-fluid">
        <Carousel data={meta}>
          <Repeat data={slides} Template={Template} className="carousel-inner" />
        </Carousel>
      </div>);
  }
}

Header.propTypes = {
  data: React.PropTypes.object.isRequired,
};
