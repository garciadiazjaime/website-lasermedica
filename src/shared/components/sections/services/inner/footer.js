import React from 'react';

import Button1 from '../../../elements/buttons/button1';
import Row1 from '../../../elements/rows/row1';
import Paragraph1 from '../../../elements/paragraphs/paragraph1';
import Wrapper1 from '../../../elements/wrappers/wrapper1';

export default class Footer extends React.Component {

  render() {
    const { links } = this.props.data;
    return (<div><Wrapper1 className="sr2">
      <div className="container-fluid">
        <div className="container-fluid">
          <Row1 className="srf">
            <div className="col-xs-2 col-sm-1">
               <Button1 className="c" href={links.link1.href} title={links.link1.title} />
            </div>
            <div className="col-xs-10 col-sm-7">
              <Paragraph1 className="g2">
                {links.link1.title}
              </Paragraph1>
            </div>
            <div className="col-xs-12 col-sm-4">
              <Button1 className="g3" href={links.link2.href} title={links.link2.title}>
                {links.link2.title}
              </Button1>
            </div>
          </Row1>
        </div>
      </div>
    </Wrapper1>
    {this.props.children ? this.props.children : null}
    </div>);
  }
}

Footer.propTypes = {
  data: React.PropTypes.object.isRequired,
  children: React.PropTypes.any,
};
