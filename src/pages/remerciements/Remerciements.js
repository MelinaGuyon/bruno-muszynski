import React from 'react';
import Page from 'abstract/page/Page';
import Content from './Content/Content';

require('./Remerciements.scss');

class Remerciements extends Page {
  page = React.createRef();
  component = React.createRef();

  animateIn () {
    return new Promise((resolve, reject) => {
      this.component.current.classList.add('visible');
      resolve();
    }).catch((err) => { throw new Error(err); });
  }

  animateOut () {
    return new Promise((resolve, reject) => {
      this.component.current.classList.remove('visible');
      resolve();
    }).catch((err) => { throw new Error(err); });
  }

  render () {
    return (
      <div className='remerciements page' ref={this.page}>
        <div className="container" ref={this.component}>
          <Content></Content>
        </div>
      </div>
    )
  }
}

export default Remerciements;
