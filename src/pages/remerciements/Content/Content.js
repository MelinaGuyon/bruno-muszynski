import React from 'react';
import i18n from 'abstract/i18n/i18n';

require('./Content.scss');

class Content extends React.Component {
  component = React.createRef();

  render () {
    const info = i18n.localize('remerciements').content;

    return (
      <div className='content' ref={this.component}>
        <h3 className='title' dangerouslySetInnerHTML={{ __html: info.title }}></h3>
        <p className='text' dangerouslySetInnerHTML={{ __html: info.text }}></p>
      </div>
    )
  }
}

export default Content;
