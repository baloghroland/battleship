import React, { Component } from 'react';
import './App.css';
import LoginContainer from './containers/LoginContainer';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Battleship</h1>
        <LoginContainer />
      </div>
    );
  }
}

export default App;
