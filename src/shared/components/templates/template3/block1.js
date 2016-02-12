import React from 'react';

import Row1 from '../../../elements/rows/row1';
import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';

export default class Block1 extends React.Component {

  render() {
    const { classes, texts } = this.props.data;
    return (<div className="container-fluid">
      <Row1 className={classes.wrapperClass}>
        <div className="col-xs-12 col-sm-8">
          <Wrapper1 className="c2">
            <Title1 className="st1">
              {texts.text1}
            </Title1>
            <Title1 className="h">
              {texts.text2}
            </Title1>
            <div className="row">
              <div className="col-xs-12 col-sm-7">
                <Paragraph1 className="d">
                  {texts.text3}
                </Paragraph1>
              </div>
            </div>
          </Wrapper1>
        </div>
      </Row1>
    </div>);
  }
}

Block1.propTypes = {
  data: React.PropTypes.object.isRequired,
};
