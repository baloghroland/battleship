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

      event.preventDefault();

      console.log('loginRoom: ', room);

      await loginUser(room, name);
      await createOrJoinGame();
    }

    this.handleRadio = event => {
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
          <label htmlFor="room"><input name="room" id="room" placeholder="Room name" onChange={this.handleChange} /></label>
        </div>
        <div>
          <label htmlFor="name"><input name="name" id="name" placeholder="Player name" onChange={this.handleChange} /></label>
        </div>
        <div>
          <input type="radio" chekced={radio === 'ai' ? 'checked' : ''} name="ai-human" value="ai" id="ai" style={{width: "20%"}} onChange={this.handleRadio} /><label htmlFor="ai" >AI</label>
          <input type="radio" chekced={radio === 'human' ? 'checked' : ''} name="ai-human" value="human" id="human" style={{width: "20%"}} onChange={this.handleRadio} /><label htmlFor="human" >Human</label>
        </div>
        <div>
          <button type="submit" className="btn btn-info" onClick={this.handleLogin} disabled={!start}>Start</button>
        </div>
      </form>
    );
  }
}

export default Login;
