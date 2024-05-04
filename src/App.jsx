import React from 'react';
import './App.css';
import HomeComponent from './Components/HomeComponent';
import QuizComponent from './Components/QuizComponent';
import ResultComponent from './Components/ResultComponent';

// function App() {
 class App extends React.Component
  {
  render(){
  return (
    <div className="App">
      <HomeComponent/>
      <QuizComponent/>
      <ResultComponent/>
    </div>
  );
}
}

export default App;