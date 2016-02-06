import React, { Component } from 'react';
import _ from 'lodash';

import Card from './card';

export default class Carousel1 extends Component {

  constructor(props) {
    super(props);
  }

  getSlides(slides, classes) {
    if (_.isArray(slides) && slides.length) {
      return slides.map((slide, index) => {
        const activeState = this.getActiveState(index);
        const itemClasses = 'item ' + activeState + ' ' + (classes.item || '');
        const wrapperInner = slide.wrapperInner ? slide.wrapperInner.style : null;

        return (<div className={itemClasses} key={index} style={slide.wrapper.style}>
            <div className="container" style={wrapperInner}>
              <div className={classes.wrapperElement || ''}>
                <Card data={slide.card} />
              </div>
            </div>
          </div>);
      }, this);
    }
    return null;
  }

  getIndicators(data, cID, iS) {
    if (_.isArray(data) && data.length) {
      return data.map((slide, i) => {
        const s = this.getActiveState(i);
        return (
          <li data-target={cID} data-slide-to={i} key={i} className={s} style={iS}></li>
        );
      }, this);
    }

    return null;
  }

  getActiveState(index) {
    return index === 0 ? 'active' : null;
  }

  getControls(meta, carouselID) {
    const ArrowStyle = {
      leftArrow: _.merge({}, meta.arrowLeft, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
      }),
      rightArrow: _.merge({}, meta.arrowRight, {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translateY(-50%) translateX(-50%)',
      }),
    };

    const leftClasses = 'left carousel-control';
    const rightClasses = 'right carousel-control';
    const href = '#' + carouselID;
    return (<div>
        <a className={leftClasses} href={href} role="button" data-slide="prev" style={meta.style}>
          <div style= {ArrowStyle.leftArrow} aria-hidden="true"></div>
          <span className="sr-only">Previous</span>
        </a>
        <a className={rightClasses} href={href} role="button" data-slide="next" style={meta.style}>
          <div style= {ArrowStyle.rightArrow} aria-hidden="true"></div>
          <span className="sr-only">Next</span>
        </a>
      </div>);
  }


  render() {
    const { data } = this.props;
    const { slides, meta } = data;
    const sliderID = data.meta.id;

    const slidesEl = this.getSlides(slides, data.classes);
    const controlsEl = meta.showControl !== false ? this.getControls(meta, meta.id) : null;
    const indicatorsEl = meta.showIndicators !== false ?
      this.getIndicators(slides, meta.id, meta.indicators) : null;

    const interval = data.meta.interval ? data.meta.interval : 8000;

    return (
      <div id={sliderID} className="carousel slide" data-ride="carousel" data-interval={interval}>
        <ol className="carousel-indicators">
          {indicatorsEl}
        </ol>
        <div className={data.classes.carouselInner + ' carousel-inner'} role="listbox">
          {slidesEl}
        </div>
        {controlsEl}
      </div>
    );
  }
}

Carousel1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
