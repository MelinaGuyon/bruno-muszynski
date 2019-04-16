import React from 'react';
import Router from 'abstract/router/Router';
import RouterComponent from 'abstract/router/RouterComponent';

require('./Footer.scss');

class Footer extends React.Component {
  component = React.createRef();

  render () {
    return (
      <footer className='footer' ref={this.component}>

      </footer>
    );
  }
}

export default Footer;
