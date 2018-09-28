import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
    }

    this.placeShip = (x, y, size, direction) => {
      const { addUserShip, activeShip, setActiveShip, userShips } = this.props;
      const placedIndexes = userShips.map(ship => ship.idx);

      if (placedIndexes.indexOf(activeShip-1) === -1) {
        addUserShip(x, y, size, direction, activeShip-1);
      }

      setActiveShip(activeShip+1);
    }

    this.createTable = y => {
      const arr = [0,1,2,3,4,5,6,7,8,9];
      const { activeShip, ships, userShips, enemyShoots } = this.props;

      return arr.map((x) => {
        const shipPointsArray = this.getShipPointsArray(userShips);
        const foundShoot = enemyShoots.find(es => es.x === x && es.y === y);
        const active = shipPointsArray.find((val) => (val.x == x && val.y == y)) ? 'active' : '';
        const style = foundShoot ? foundShoot.type : 'untouched';

        return (
          <li
            key={`${x}${y}`}
            className={`points offset1 1 ${style} ${active}`}
            onClick={() => this.placeShip(x, y, ships[activeShip-1].size, 'h')}
            style={userShips.length === 5 ? {pointerEvents: 'none'} : {}}
          >
            <span className="hole"></span>
          </li>
        )
      });
    }

    this.getShipPointsArray = userShips => {
      let shipPointsArray = [];
      userShips.map(ship => {
        for(let i = 0; i < ship.size; i++ ) {
          if (ship.orientation == 'v') shipPointsArray.push({x: ship.x + i, y: ship.y});
          if (ship.orientation == 'h') shipPointsArray.push({x: ship.x, y: ship.y + i});
        }
      });
      return shipPointsArray;
    }
  }

  render() {
    return (
      <div className="table">
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

export default Table;
