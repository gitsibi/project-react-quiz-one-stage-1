import React from 'react'
import './HomeComponent.css'

export default class HomeComponent extends React.Component {
  render() {
    return (
      <div className='home'>
        <div className="play-page">
            <h1>Quiz App</h1>
            <button className='PlayBtn'>Play</button>    
        </div>        
      </div>
    )
  }
}

