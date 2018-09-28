import React, { Component } from 'react';
import './App.css';
import Login from './components/Login.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1 className="App-title">Welcome to Battleship</h1>
        <Login />
      </div>
    );
  }
}

export default App;
