import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Game from './Game';
import Score from './Score';

const value1 = Math.floor(Math.random() * 100);
const value2 = Math.floor(Math.random() * 100);
const value3 = Math.floor(Math.random() * 100);
const proposedAnswer = Math.floor(Math.random() * 3) + value1 + value2 + value3;
const numQuestions = 0;
const numCorrect = 0;

class App extends Component {
  state = {
  correctAns:0,
  numberQuestion:0
  }

handleAnswer = answerWasCorrect => {
    if (answerWasCorrect) {
      this.setState(currState => ({
        correctAns: currState.correctAns + 1,
      }));
    }
    this.setState(currState => ({
      numberQuestion: currState.numberQuestion + 1,
    }));
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ReactND - Coding Practice</h1>
        </header>
        <div className="game">
          <h2>Mental Math</h2>
         <Game handleAnswer={this.handleAnswer} />
         <Score numCorrect={this.state.correctAns} numQuestions={this.state.numberQuestion} />
        </div>
      </div>
    );
  }
}

export default App;
