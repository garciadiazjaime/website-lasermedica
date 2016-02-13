import React from 'react';

import Row1 from '../../../elements/rows/row1/';
import Title1 from '../../../elements/titles/title1';
import Button1 from '../../../elements/buttons/button1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';


export default class Intro2 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
      <Row1 className="ne">
        <div className="col-xs-12 col-sm-5">
          <Wrapper1 className="c">
            <Title1 className="c4">
              {texts.text1}
            </Title1>
          </Wrapper1>
        </div>
        <div className="col-xs-12 col-sm-5 col-sm-offset-1">
          <Wrapper1 className="c6">
            <Title1 className="r">
              {texts.text2}
            </Title1>
            <Paragraph1 className="j">
              {texts.text3}
            </Paragraph1>
            <Button1 className="b" title={links.link1.title} href={links.link1.href} />
          </Wrapper1>
        </div>
      </Row1>
    </div>);
  }
}

Intro2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
