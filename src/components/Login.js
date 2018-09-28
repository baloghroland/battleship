import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: '',
      name: '',
    }

    this.handleChange = event => {
      this.setState({[event.target.name]: event.target.value});
    }

    this.handleLogin = event => {
      const { room, name } = this.state;
      this.props.loginUser(room, name);
      event.preventDefault();
    }
  }
  render() {
    return (
      <form className="login">
        <label htmlFor="game">Room name<input name="game" id="game" placeholder="Example Game" onChange={this.handleChange} /></label>
        <label htmlFor="name">Player name<input name="name" id="name" placeholder="Example User" onChange={this.handleChange} /></label>
        <div><button type="submit" onClick={this.handleLogin}>Start</button></div>
      </form>
    );
  }
}

export default Login;
