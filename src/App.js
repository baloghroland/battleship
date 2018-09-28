import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';
import Game from './components/Game.js';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="main well">
          <h1 className="App-title">Welcome to Battleship</h1>
          <Login />
          <Game />
        </div>
      </div>
    );
  }
}

export default App;
