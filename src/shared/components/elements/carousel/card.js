import React, { Component } from 'react';
import { Link } from 'react-router';
import _ from 'lodash';

import Paragraph1 from '../../paragraphs/paragraph1';
import Title1 from '../../titles/title1';


export default class SimpleCard extends Component {

  constructor(props) {
    super(props);
  }

  getWrapper(data) {
    return data && _.isObject(data.style) ? data.style : null;
  }

  getTitle(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<h1 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h1>);
      });
    }
    return null;
  }

  getSubtitle(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<h2 style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></h2>);
      });
    }
    return null;
  }

  getDescription(data) {
    if (data && _.isArray(data.text) && data.text.length) {
      return data.text.map((text) => {
        return (<p style={data.style} dangerouslySetInnerHTML={this.sanitize(text)}></p>);
      });
    }
    return null;
  }

  getLink(data, index) {
    const { text, url, style } = data;
    if (text && url) {
      return (
        <Link dangerouslySetInnerHTML={this.sanitize(text)} to={url} key={index} style={style} />
      );
    }
    return null;
  }

  getSprite(data, index) {
    if (data && data.style) {
      return (<div key={index} style={data.style} className={data.className}></div>);
    }
    return null;
  }

  getImage(data, index) {
    const { src, style, alt, classes } = data;
    if (src) {
      return (<img src={src} style={style} alt={alt} className={classes} key={index} />);
    }
    return null;
  }

  getCustomComponent(element) {
    switch (element) {
      case 'Title1':
        return Title1;
      case 'Par1':
        return Paragraph1;
      default:
        return null;
    }
  }

  getCustom(data, index) {
    const { element, className, text } = data;
    const CustomComponent = this.getCustomComponent(element);

    if (CustomComponent) {
      return (<CustomComponent className={className} classTitle={className} key={index}>
          {text}
        </CustomComponent>);
    }
    return null;
  }

  sanitize(value) {
    return {
      __html: value,
    };
  }

  render() {
    const { data } = this.props;

    if (_.isArray(data.elements) && data.elements.length) {
      const wrapperStyle = this.getWrapper(data.wrapper);
      const wrapperClass = data.wrapper && data.wrapper.className ? data.wrapper.className : null;

      const Components = data.elements.map((item, index) => {
        switch (item.type.toUpperCase()) {
          case 'TITLE':
            return this.getTitle(item);
          case 'SUBTITLE':
            return this.getSubtitle(item);
          case 'DESCRIPTION':
            return this.getDescription(item);
          case 'LINK':
            return this.getLink(item, index);
          case 'SPRITE':
            return this.getSprite(item, index);
          case 'IMAGE':
            return this.getImage(item, index);
          case 'CUSTOM':
            return this.getCustom(item, index);
          default:
            return null;
        }
      });
      return (
        <div style={wrapperStyle} className={wrapperClass}>
          {Components}
        </div>
      );
    }
    return null;
  }
}

SimpleCard.propTypes = {
  data: React.PropTypes.object.isRequired,
};
