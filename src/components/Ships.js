import React, { Component } from 'react';

class Ships extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const { activeShip, setActiveShip, userShips } = this.props;

    const placedIndexes = userShips.map(ship => ship.idx);
    console.log('userShiposs: ', userShips);

    return (
      <div className="ships">
        {[5,4,3,3,2].map((val, index) => {
          const idx = index + 1;
          return (<div key={idx} className={activeShip === idx ? 'active ship ship'+idx : 'ship ship'+idx} onClick={() => setActiveShip(idx)} style={placedIndexes.indexOf(index) !== -1 ? {pointerEvents: 'none'} : {}}>
            <span>{val}</span><img src={'ship' + idx + '.png'} />
          </div>);
        })}
      </div>
    );
  }
}

export default Ships;
