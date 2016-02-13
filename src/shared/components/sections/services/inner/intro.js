import React from 'react';
import _ from 'lodash';

import Title1 from '../../../elements/titles/title1';
import Button1 from '../../../elements/buttons/button1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';


export default class Intro extends React.Component {

  renderContent(data) {
    if (_.isArray(data) && data.length) {
      return data.map((item, index) => {
        return (
          <Paragraph1 className="h" key={index} data={item} />
        );
      });
    }
    return null;
  }

  render() {
    const { titles, texts, links, classes } = this.props.data;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className={classes.class1}>
            <Title1 className={classes.class2} data={titles.title1} />
            <Button1 className={classes.class3} href={links.link1.href} title={links.link1.title}>
              {links.link1.title}
            </Button1>
          </Wrapper1>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="c3">
            {this.renderContent(texts)}
          </Wrapper1>
        </div>
      </div>
    </div>);
  }
}

Intro.propTypes = {
  data: React.PropTypes.object.isRequired,
};
