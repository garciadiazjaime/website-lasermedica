import React from 'react';

import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';
import Button1 from '../../../elements/buttons/button1';

export default class Block2 extends React.Component {

  render() {
    const { classes, texts, links } = this.props.data;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className={classes.wrapperClass}>
            <Title1 className="c2" data={texts.text1} />
            <Button1 className="d" href={links.href1} title={links.link1}>
              {links.link1}
            </Button1>
          </Wrapper1>
        </div>
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="c3">
            <Paragraph1 className="h" data={texts.text2} />
            <Paragraph1 className="h">
              {texts.text3}
            </Paragraph1>
            <Paragraph1 className="h">
              {texts.text4}
            </Paragraph1>
          </Wrapper1>
        </div>
      </div>
      <div className="row">
        <div className="col-xs-12 col-sm-6">
        </div>
        <div className="col-xs-12 col-sm-6">
        </div>
      </div>
    </div>);
  }
}

Block2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
