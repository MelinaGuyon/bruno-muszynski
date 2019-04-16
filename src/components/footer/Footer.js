import React from 'react';
import i18n from 'abstract/i18n/i18n';

require('./Footer.scss');

class Footer extends React.Component {
  component = React.createRef();

  render () {
    const footer = i18n.localize('footer');

    return (
      <footer className='footer' ref={this.component}>
        <span><img src="./images/social.svg" alt=""/><a href={footer.social.link} target='_blank' rel="noopener noreferrer">{footer.social.text}</a></span>
        <span dangerouslySetInnerHTML={{ __html: footer.thanks }}></span>
      </footer>
    );
  }
}

export default Footer;
