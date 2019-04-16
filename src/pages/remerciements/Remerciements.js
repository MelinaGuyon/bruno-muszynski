import React from 'react';
import Page from 'abstract/page/Page';

require('./Remerciements.scss');

class Remerciements extends Page {
  page = React.createRef();
  component = React.createRef();

  render () {
    return (
      <div className='remerciements page' ref={this.page}>
        <div className="container" ref={this.component}>
        </div>
      </div>
    )
  }
}

export default Remerciements;
