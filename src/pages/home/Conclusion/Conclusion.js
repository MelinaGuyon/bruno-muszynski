import React from 'react';
import i18n from 'abstract/i18n/i18n';

require('./Conclusion.scss');

class Conclusion extends React.Component {
  component = React.createRef();

  render () {
    const info = i18n.localize('home').conclusion;

    return (
      <div className='conclusion' ref={this.component}>
        <h3 className='title' dangerouslySetInnerHTML={{ __html: info.title }}></h3>
        <p className='text' dangerouslySetInnerHTML={{ __html: info.text }}></p>
      </div>
    )
  }
}

export default Conclusion;
