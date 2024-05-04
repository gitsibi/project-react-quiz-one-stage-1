import React from 'react'
import './QuizComponent.css'

export default class QuizComponent extends React.Component {
  render() {
    return (
      <div>
        <div className="quiz-main">
            <div className="page-box">
                <div className='heading'>
                    <h1>Question</h1>
                </div>
                <div className='Num'>
                    <h4>1 of 15</h4>
                </div>
                <div className='Ques'>
                    <p>Which is the only mammal that can jump?</p>
                </div>
                <div className='optBox'>
                      <div className="opt"><h2>Dog</h2></div>
                      <div className="opt"><h2>Elephant</h2></div>
                      <div className="opt"><h2>Goat</h2></div>
                      <div className="opt"><h2>Lion</h2></div>
                </div>
                <div className="Btn">
                        <button className='prevbtn'>Previous</button>
                        <button className='nextbtn'>Next</button>
                        <button className='quitbtn'>Quit</button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}