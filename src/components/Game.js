import React, { Component } from 'react';
import ShipsContainer from '../containers/ShipsContainer';
import LoginContainer from '../containers/LoginContainer';
import TableContainer from '../containers/TableContainer';
import TargetTableContainer from '../containers/TargetTableContainer';
import { GAME_STATE } from '../constants';

class Game extends Component {
  render() {
    const { gameStatus } = this.props;

    return (
      <div>
        {(gameStatus === GAME_STATE.GAME_OVER || gameStatus === GAME_STATE.VICTORY) &&
          <div className="end-screen">
            <p>{gameStatus}</p>
          </div>
        }
        <div className="game row">
          <div className="col-sm-12 col-lg-4 left">
            <div className="own">
              <TableContainer />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4">
            <div className="center">
              <ShipsContainer />
            </div>
          </div>
          <div className="col-sm-12 col-lg-4 right">
            <div className="enemy">
              <TargetTableContainer />
            </div>
          </div>
        </div>
<<<<<<< Updated upstream
        <LoginContainer />
=======
        <div className="game row">
          <div className="col-sm-12">
            {gameStatus !== GAME_STATE.BATTLE_IN_PROGRESS &&
              <LoginContainer />
            }
          </div>
        </div>
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default Game;
