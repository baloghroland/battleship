import React, { Component } from 'react';

class Login extends Component {
  render() {
    return (
      <form className="login">
        <div><input name="game" /></div>
        <div><input name="name" /></div>
        <div><button type="submit">Start</button></div>
      </form>
    );
  }
}

export default Login;
