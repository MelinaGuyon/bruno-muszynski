import React from 'react';
import i18n from 'abstract/i18n/i18n';
import map from 'lodash/map'

require('./Steps.scss');

class Steps extends React.Component {
  component = React.createRef();

  onButtonClick = (e) => {
    const step = e.target.closest('.step');
    step.classList.toggle('active');
  }

  renderList = (item, index) => {
    console.log(item)
    return [
      <li key={index}><a href={item.link} target='_blank' rel="noopener noreferrer">- {item.text}</a></li>
    ]
  }

  renderStep = (step, index) => {
    return [
      <div className='step' key={index}>
        <div className='content'>
          <h3 className='title' dangerouslySetInnerHTML={{ __html: step.title }}></h3>
          <p className='text' dangerouslySetInnerHTML={{ __html: step.text }}></p>
          <button className='button' onClick={this.onButtonClick}>
            <span className='open'>{step.ctaText}</span>
            <span className='close'>{step.ctaTextClose}</span>
          </button>
        </div>

        <div className='audio-container'>
          <div className='audio'>
            <iframe width="100%" height="166" scrolling="no" frameBorder="no" src={step.audio}></iframe>
          </div>
          <div className='searchs'>
            <span className='title'>{step.searchsTitle}</span>
            <ul>
              {map(step.searchs, this.renderList)}
            </ul>
          </div>
        </div>
      </div>
    ]
  }

  render () {
    const steps = i18n.localize('home').steps;

    return (
      <div className='steps' ref={this.component}>
        {map(steps, this.renderStep)}
      </div>
    )
  }
}

export default Steps;
