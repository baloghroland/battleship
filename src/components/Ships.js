import React, { Component } from 'react';

class Ships extends Component {
  constructor(props) {
    super(props);
  }
  render(props) {
    const { activeShip, setActiveShip } = this.props;

    return (
      <div className="ships">
        {[5,4,3,3,2].map((val, index) => {
          const idx = index + 1;
          return <div key={idx} className={activeShip === idx ? 'active ship ship'+idx : 'ship ship'+idx} onClick={() => setActiveShip(idx)}>{val}</div>
        })}
      </div>
    );
  }
}

export default Ships;
