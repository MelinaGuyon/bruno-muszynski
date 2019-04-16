import React from 'react';
import i18n from 'abstract/i18n/i18n';
import map from 'lodash/map'

require('./Steps.scss');

class Steps extends React.Component {
  component = React.createRef();

  renderStep = (step, index) => {
    return [
      <div className='step' key={index}>
        <div className='content'>
          <h3 className='title' dangerouslySetInnerHTML={{ __html: step.title }}></h3>
          <p className='text' dangerouslySetInnerHTML={{ __html: step.text }}></p>
          <button className='button'>{step.ctaText}</button>
        </div>

        <div className='audio'>
        </div>
      </div>
    ]
  }

  render () {
    const steps = i18n.localize('home').steps;
    console.log(steps)

    return (
      <div className='steps' ref={this.component}>
        {map(steps, this.renderStep)}
      </div>
    )
  }
}

export default Steps;
