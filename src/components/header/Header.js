import React from 'react';
import Router from 'abstract/router/Router';
import RouterComponent from 'abstract/router/RouterComponent';
import i18n from 'abstract/i18n/i18n';

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
    const header = i18n.localize('header');

    return (
      <header className='header' ref={this.component}>
        <a className='logo' target='_blank' rel="noopener noreferrer" href='https://www.ensci.com/ensci-les-ateliers/'>
          <img src='./images/logo.svg' />
        </a>
        <div className='navigation'>
          <span data-route='home'><RouterComponent route="home">home</RouterComponent></span>
          <span><a href={header.searchs} target='_blank' rel="noopener noreferrer">recherches</a></span>
          <span><a href={header.bibliography} target='_blank' rel="noopener noreferrer">bibliographie</a></span>
          <span data-route='remerciements'><RouterComponent route="remerciements">remerciements</RouterComponent></span>
        </div>
      </header>
    );
  }
}

export default Header;
