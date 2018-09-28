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
        <div><input name="room" onChange={this.handleChange} /></div>
        <div><input name="name" onChange={this.handleChange} /></div>
        <div><button type="submit" onClick={this.handleLogin}>Start</button></div>
      </form>
    );
  }
}

export default Login;
