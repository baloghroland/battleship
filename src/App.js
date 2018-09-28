import React, { Component } from 'react';
import './App.css';
import Game from './containers/GameContainer.js';

class App extends Component {
  render() {
    return (
      <div className="App container">
        <div className="main well">
          <img src="head.png" height="120" />
          <Game />
        </div>
        <audio
          loop="loop"
          autoPlay="autoplay"
        >
            <source src="song.mp3" type="audio/mpeg" />
        </audio>
        <audio id="destroy" src="destroy.wav" preload="auto"></audio>
        <div className="foot">Copyright: Warheads games 2018</div>
      </div>
    );
  }
}

export default App;
