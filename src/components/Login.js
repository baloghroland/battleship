import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: '',
      name: ''
    }

    this.handleChange = event => {
      this.setState({[event.target.name]: event.target.value});
    }

    this.handleLogin = async (event) => {
      const { room, name } = this.state;
      const { loginUser, createOrJoinGame } = this.props;

      event.preventDefault();

      console.log('loginRoom: ', room);

      await loginUser(room, name);
      await createOrJoinGame();
    }
  }
  render() {
    const { startEnabled } = this.props;
    return (
      <form className="login row">
        <div className="col-sm-12 col-lg-4">
          <div>
            <label htmlFor="room">
              Room
              <input name="room" id="room" placeholder="Room name" onChange={this.handleChange} />
            </label>
          </div>
          <div>
            <label htmlFor="name">
              Name
              <input name="name" id="name" placeholder="Player name" onChange={this.handleChange} />
            </label>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div>
            <button type="submit" className="btn btn-info" onClick={this.handleLogin} disabled={!startEnabled}>Start</button>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
