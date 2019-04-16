import React from 'react';
import Router from 'abstract/router/Router';
import RouterComponent from 'abstract/router/RouterComponent';

require('./Header.scss');

class Header extends React.Component {
  component = React.createRef();

  constructor () {
    super();
    this.state = {}
  }

  componentDidMount = () => {
    Router.on('change', this.onRouteChange);
  }

  onRouteChange = () => {
    // set active link
  }

  render () {
    return (
      <header className='header' ref={this.component}>
        <div className='logo'>
          <img src='./images/logo.png'/>
        </div>
        <div className='navigation'>
          <RouterComponent route="home">recherches</RouterComponent>
          <a href="http://google.com" target='_blank' rel="noopener noreferrer">bibliographie</a>
          <RouterComponent route="remerciements">remerciements</RouterComponent>
        </div>
      </header>
    );
  }
}

export default Header;
