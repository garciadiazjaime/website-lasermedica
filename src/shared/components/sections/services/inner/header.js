import React from 'react';
// import _ from 'lodash';
//
// import Banner from './banner';
// import Intro from './intro';
// import Intro2 from './intro2';
// import Template2 from './template2';

import Carousel from '../../../elements/carousel';
import Repeat from '../../../elements/repeat';
import Template from '../../../templates/template6';


export default class Header extends React.Component {

  // renderElement(data) {
  //   if (_.isArray(data) && data.length) {
  //     return data.map((item, index) => {
  //       switch (item.type.toUpperCase()) {
  //         case 'BANNER':
  //           return (<Banner data={item} key={index} />);
  //         case 'INTRO':
  //           return (<Intro data={item} key={index} />);
  //         case 'INTRO2':
  //           return (<Intro2 data={item} key={index} />);
  //         case 'CONSULTORIA':
  //           return (<Template2 data={item} key={index} />);
  //         default:
  //           return null;
  //       }
  //     });
  //   }
  // }

  render() {
    const { meta, slides } = this.props.data.carousels.carousel1;
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
