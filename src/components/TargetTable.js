import React, { Component } from 'react';

class TargetTable extends Component {
  constructor(props) {
    super(props);


    this.createTable = y => {
      const { shoot, userShoots, inProgress, isUserTurn } = this.props;
      const arr = [0,1,2,3,4,5,6,7,8,9];

      return arr.map((x) => {
        const foundShoot = userShoots.find(us => us.x === x && us.y === y);
        const style = foundShoot ? foundShoot.type : 'clickable';

        return (
          <li key={`${x}${y}`} className={`points offset1 1 ${style}`} onClick={() => (!foundShoot && !inProgress && !isUserTurn) ? null : shoot(x, y)}>
            <span className="hole"></span>
          </li>
        )
      });
    }
  }

  render() {
    const { isUserTurn } = this.props;
    return (
      <div className={`table ${isUserTurn ? '' : 'do-not-shoot'}`}>
        <div className="displays top">
          <span className="aTops hidezero">0</span>
          <span className="aTops">1</span>
          <span className="aTops">2</span>
          <span className="aTops">3</span>
          <span className="aTops">4</span>
          <span className="aTops">5</span>
          <span className="aTops">6</span>
          <span className="aTops">7</span>
          <span className="aTops">8</span>
          <span className="aTops">9</span>
          <span className="aTops">10</span>
          <ul className="gridd">
            {this.createTable(0)}
            {this.createTable(1)}
            {this.createTable(2)}
            {this.createTable(3)}
            {this.createTable(4)}
            {this.createTable(5)}
            {this.createTable(6)}
            {this.createTable(7)}
            {this.createTable(8)}
            {this.createTable(9)}
          </ul>
          <span className="aLeft">A</span>
          <span className="aLeft">B</span>
          <span className="aLeft">C</span>
          <span className="aLeft">D</span>
          <span className="aLeft">E</span>
          <span className="aLeft">F</span>
          <span className="aLeft">G</span>
          <span className="aLeft">H</span>
          <span className="aLeft">I</span>
          <span className="aLeft">J</span>
        </div>
      </div>
    );
  }
}

export default TargetTable;
