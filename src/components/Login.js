import React, { Component } from 'react';

class Login extends Component {
  constructor(props) {
    super(props);

    this.state = {
      room: '',
      name: '',
      radio: 'ai',
    }

    this.handleChange = event => {
      this.setState({[event.target.name]: event.target.value});
    }

    this.handleLogin = event => {
      const { room, name } = this.state;
      this.props.loginUser(room, name);
      event.preventDefault();
    }

    this.handleChange = event => {
      this.setState({ radio: event.target.value });
    }
  }
  render() {
    console.log(this.state.radio);
    return (
      <form className="login">
        <label htmlFor="game"><input name="game" id="game" placeholder="Room name" onChange={this.handleChange} /></label>
        <label htmlFor="name"><input name="name" id="name" placeholder="Player name" onChange={this.handleChange} /></label>
        <input type="radio" name="radio" value="ai" id="ai" style={{width: "20%"}} onChange={this.handleChange} /><label htmlFor="ai" >AI</label>
        <input type="radio" name="radio" value="human" id="human" style={{width: "20%"}} onChange={this.handleChange} /><label htmlFor="human" >Human</label>
        <div><button type="submit" className="btn btn-info" onClick={this.handleLogin}>Start</button></div>
      </form>
    );
  }
}

export default Login;
