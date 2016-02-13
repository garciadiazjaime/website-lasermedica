import React from 'react';
import _ from 'lodash';

import Title1 from '../../../elements/titles/title1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Button1 from '../../../elements/buttons/button1';
import Row1 from '../../../elements/rows/row1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';


export default class Template2 extends React.Component {

  renderItems(data) {
    const { items, classes } = data;
    if (_.isArray(items) && items.length) {
      return items.map((item, index) => {
        return (<div className={classes.class2} key={index} id={item.href}>
          <Wrapper1 className="y">
            <Wrapper1 className="x">
              <span className="">{index + 1}</span>
            </Wrapper1>
            <Title1 className="q">
              {item.title}
            </Title1>
            <Paragraph1 className="a">
              {item.description}
            </Paragraph1>
          </Wrapper1>
        </div>);
      });
    }
    return null;
  }

  render() {
    const { blocks } = this.props.data;
    const { block1, block2, block3, block4 } = blocks;
    return (<div className="container-fluid">
        <Row1 className={block1.classes.class1}>
          <div className="col-xs-12 col-sm-10 col-sm-offset-1">
            <Title1 className="s">
              {block1.texts.text1}
            </Title1>
          </div>
        </Row1>
        <div className="row">
          <div className="col-sm-6">
            <Wrapper1 className="c">
              <Title1 className="a4">
                {block2.texts.text2}
              </Title1>
              <Paragraph1 className="h">
                {block2.texts.text3}
              </Paragraph1>
            {
            block2.links.link2 ?
            <Button1 className="d" href={block2.links.link2.href} title={block2.links.link2.title}>
              {block2.links.link2.title}
            </Button1> : null
            }
            </Wrapper1>
          </div>

          <div className="col-sm-6">
            <Wrapper1 className={block2.classes.class1}>
              <Title1 className="">
                {block2.texts.text1}
              </Title1>
            <Button1 className="d" href={block2.links.link1.href} title={block2.links.link1.title}>
              {block2.links.link1.title}
            </Button1>
            </Wrapper1>
          </div>
        </div>
        <div className="row">
          <div className="col-sm-12">
            <Wrapper1 className="z">
              <Title1 className="a5">
                {block3.texts.text1}
              </Title1>
              {
                block3.texts.text2 ?
                <Title1 className="a6">
                  {block3.texts.text2}
                </Title1> : null
              }
            </Wrapper1>
          </div>
          </div>

          <div>
            {this.renderItems(block4)}
          </div>
    </div>);
  }
}

Template2.propTypes = {
  data: React.PropTypes.object.isRequired,
};
