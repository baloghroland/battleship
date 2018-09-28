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
        <label htmlFor="game"><input name="game" id="game" placeholder="Room name" onChange={this.handleChange} /></label>
        <label htmlFor="name"><input name="name" id="name" placeholder="Player name" onChange={this.handleChange} /></label>
        <div><button type="submit" className="btn btn-info" onClick={this.handleLogin}>Start</button></div>
      </form>
    );
  }
}

export default Login;
