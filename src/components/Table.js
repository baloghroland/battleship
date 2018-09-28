import React, { Component } from 'react';

class Table extends Component {
  constructor(props) {
    super(props);

    this.createTable = y => {
      const arr = [1,2,3,4,5,6,7,8,9,10];

      return arr.map((el) => {
        return <li class="points offset1 1" onClick={() => console.log('click x: ', el, 'y: ', y)}><span class="hole"></span></li>
      });
    }
  }

  render() {
    return (
      <div className="table">
        <div class="board">
          <div class="displays">
            <div class="top">
              <span class="aTops hidezero">0</span>
              <span class="aTops">1</span>
              <span class="aTops">2</span>
              <span class="aTops">3</span>
              <span class="aTops">4</span>
              <span class="aTops">5</span>
              <span class="aTops">6</span>
              <span class="aTops">7</span>
              <span class="aTops">8</span>
              <span class="aTops">9</span>
              <span class="aTops">10</span>
              <ul class="gridd">
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
              <span class="aLeft">A</span>
              <span class="aLeft">B</span>
              <span class="aLeft">C</span>
              <span class="aLeft">D</span>
              <span class="aLeft">E</span>
              <span class="aLeft">F</span>
              <span class="aLeft">G</span>
              <span class="aLeft">H</span>
              <span class="aLeft">I</span>
              <span class="aLeft">J</span>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Table;
