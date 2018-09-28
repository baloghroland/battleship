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

    this.handleLogin = async (event) => {
      const { room, name } = this.state;
      const { loginUser, createOrJoinGame } = this.props;
      
      await loginUser(room, name);
      await createOrJoinGame();

      event.preventDefault();
    }

    this.handleChange = event => {
      this.setState({ radio: event.target.value });
    }
  }
  render() {
    const { startEnabled } = this.props;
    const { radio } = this.state;
    const start = radio === 'ai' || startEnabled;
    console.log(this.state.radio);
    return (
      <form className="login">
        <div>
          <label htmlFor="game"><input name="game" id="game" placeholder="Room name" onChange={this.handleChange} /></label>
        </div>
        <div>
          <label htmlFor="name"><input name="name" id="name" placeholder="Player name" onChange={this.handleChange} /></label>
        </div>
        <div>
          <input type="radio" checked={radio === 'ai'} name="ai-human" value="ai" id="ai" style={{width: "20%"}} onChange={this.handleChange} /><label htmlFor="ai" >AI</label>
          <input type="radio" checked={radio === 'human'} name="ai-human" value="human" id="human" style={{width: "20%"}} onChange={this.handleChange} /><label htmlFor="human" >Human</label>
        </div>
        <div>
          <button type="submit" className="btn btn-info" onClick={this.handleLogin} disabled={!start}>Start</button>
        </div>
      </form>
    );
  }
}

export default Login;
