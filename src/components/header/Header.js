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
    const spans = [...this.component.current.querySelectorAll('.navigation > span')];
    const route = Router.getLastRoute();

    spans.forEach((span) => {
      span.classList.remove('active');
      const spanroute = span.getAttribute('data-route');
      if (spanroute === route) span.classList.add('active');
    })
  }

  render () {
    return (
      <header className='header' ref={this.component}>
        <div className='logo'>
          <img src='./images/logo.png'/>
        </div>
        <div className='navigation'>
          <span data-route='home'><RouterComponent route="home">recherches</RouterComponent></span>
          <span><a href="http://google.com" target='_blank' rel="noopener noreferrer">bibliographie</a></span>
          <span data-route='remerciements'><RouterComponent route="remerciements">remerciements</RouterComponent></span>
        </div>
      </header>
    );
  }
}

export default Header;
