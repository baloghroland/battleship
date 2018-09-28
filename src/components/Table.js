import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);

    this.state = {
      ships: [],
      activeShip: 1,
    }

    this.placeShip = (x, y, size, direction) => {
      const { addUserShip } = this.props;

      addUserShip(x, y, size, direction);
      console.log('ship placement: ', x, y, size, direction);
    }

    this.createTable = y => {
      const arr = [1,2,3,4,5,6,7,8,9,10];
      const { activeShip, ships } = this.props;

      return arr.map((x) => {
        return (
          <li className="points offset1 1" onClick={() => this.placeShip(x, y, ships[activeShip-1].size, 'h')}>
            <span className="hole"></span>
          </li>
        )
      });
    }
  }

  render() {    
    return (
      <div className="table">
        <div className="board">
          <div className="displays">
            <div className="top">
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
                {this.createTable(1)}
                {this.createTable(2)}
                {this.createTable(3)}
                {this.createTable(4)}
                {this.createTable(5)}
                {this.createTable(6)}
                {this.createTable(7)}
                {this.createTable(8)}
                {this.createTable(9)}
                {this.createTable(10)}
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
        </div>
      </div>
    );
  }
}

export default Table;
