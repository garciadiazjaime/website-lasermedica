import React from 'react';

import Title1 from '../../../elements/titles/title1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';
import Button1 from '../../../elements/buttons/button1';
export default class Block2 extends React.Component {

  render() {
    const { texts, links } = this.props.data;
    return (<div className="container-fluid">
      <div className="row">
        <div className="col-xs-12 col-sm-6">
          <Wrapper1 className="c">
            <Title1 className="stm">
              {texts.text1}
            </Title1>
          </Wrapper1>
          <Wrapper1 className="c4">
            <div className="engine-repeat">
              <Button1 className="sb" href={links.link1.href} title={links.link1.title}>
                {links.link1.title}
              </Button1>
            </div>
          </Wrapper1>
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
