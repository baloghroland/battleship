import React, { Component } from 'react';
import './App.css';
import Game from './components/Game.js';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="main well">
          <img src="head.png" height="120" />
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
