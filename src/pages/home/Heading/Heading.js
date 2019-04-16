import React from 'react';
import i18n from 'abstract/i18n/i18n';

require('./Heading.scss');

class Heading extends React.Component {
  component = React.createRef();

  render () {
    const info = i18n.localize('home').heading;

    return (
      <div className='heading' ref={this.component}>
        <h2 className='subtitle'>{info.subtitle}</h2>
        <h1 className='title' dangerouslySetInnerHTML={{ __html: info.title }}></h1>
        <p className='text' dangerouslySetInnerHTML={{ __html: info.text }}></p>
      </div>
    )
  }
}

export default Heading;
