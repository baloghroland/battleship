import React, { Component } from 'react';
import ShipsContainer from '../containers/ShipsContainer';
import LoginContainer from '../containers/LoginContainer';
import TableContainer from '../containers/TableContainer';

class Game extends Component {
  render() {
    return (
      <div className="game row">
        <div className="col">
          <div className="own">
            <TableContainer />
          </div>
        </div>
        <div className="col">
          <LoginContainer />
          <ShipsContainer />
        </div>
        <div className="col">
          <div className="enemy">
            <TableContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
