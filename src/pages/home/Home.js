import React from 'react';
import Page from 'abstract/page/Page';
import Heading from './Heading/Heading';
import Steps from './Steps/Steps';
import Conclusion from './Conclusion/Conclusion';

require('./Home.scss');

class Home extends Page {
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
      <div className='home page' ref={this.page}>
        <div className="container" ref={this.component}>
          <Heading></Heading>
          <Steps></Steps>
          <Conclusion></Conclusion>
        </div>
      </div>
    )
  }
}

export default Home;
