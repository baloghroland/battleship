import React, { Component } from 'react';

class Ships extends Component {
  constructor(props) {
    super(props);

    this.handleChange = event => {
      this.setState({[event.target.name]: event.target.value});
    }

  }
  render(props) {
    const activeShip = this.props.activeShip;

    return (
      <div className="ships">
        {[5,4,3,3,2].map((val, idndex) => {
          const idx = idndex+1;
          console.log({activeShip, idx, val})
          return <div key={idx} className={activeShip === idx ? 'active ship ship'+idx : 'ship ship'+idx}>{val}</div>
        })}
      </div>
    );
  }
}

export default Ships;
