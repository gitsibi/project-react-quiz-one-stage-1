import React from 'react'
import './ResultComponent.css'

export default class ResultComponent extends React.Component {
  render() {
    return (
      <div className='result-main'> 
        <h1>Result</h1>
        <div className="respage-box">
            <div className="heading">
                <h3>You need more practice!</h3>
            </div>
            <div className="Statement">
                <h1>Your Score is 20%</h1>
            </div>

            <div className="opt1">
                <div className="result">
                    <p>Total number of questions</p>
                    <p>15</p>
                </div>
                <div className="result">
                <p>Number of attempted questions</p>
                    <p>9</p>
                </div>
                <div className="result">
                <p>Number of correct questions</p>
                    <p>3</p>
                </div>
                <div className="result">
                <p>Number of wrong questions</p>
                    <p>6</p>
                </div>
            </div>

        </div>
            <div className='BtnRedo'>
                <button className="PlayAgain">Play Again</button>
                <button className="BackHome">Back to home</button>
            </div>
      </div>
    )
  }
}