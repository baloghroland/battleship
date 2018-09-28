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
        <audio loop="loop" autoplay="autoplay">
            <source src="song.mp3" type="audio/mpeg" />
        </audio>
      </div>
    );
  }
}

export default App;
