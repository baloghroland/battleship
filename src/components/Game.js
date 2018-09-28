import React, { Component } from 'react';
import Table from './Table.js';
import LoginContainer from '../containers/LoginContainer';

class Game extends Component {
  render() {
    return (
      <div className="game row">
        <div className="col">
          <div className="own">
            <Table />
          </div>
        </div>
        <div className="col">
          <LoginContainer />
        </div>
        <div className="col">
          <div className="enemy">
            <Table />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
