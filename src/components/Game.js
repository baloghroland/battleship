import React, { Component } from 'react';
import ShipsContainer from '../containers/ShipsContainer';
import LoginContainer from '../containers/LoginContainer';
import TableContainer from '../containers/TableContainer';
import TargetTableContainer from '../containers/TargetTableContainer';

class Game extends Component {
  render() {
    return (
      <div className="game row">
        <div className="col-sm-12 col-lg-4 left">
          <div className="own">
            <TableContainer />
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="center">
            <LoginContainer />
            <ShipsContainer />
          </div>
        </div>
        <div className="col-sm-12 col-lg-4 right">
          <div className="enemy">
            <TargetTableContainer />
          </div>
        </div>
      </div>
    );
  }
}

export default Game;
