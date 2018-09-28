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
            <button type="submit" className="btn btn-info" onClick={this.handleLogin} disabled={!start}>Start</button>
          </div>
        </div>
        <div className="col-sm-12 col-lg-4">
          <div className="radioss">
            <label htmlFor="ai" >AI<input chekced={radio === 'ai' ? 'checked' : ''} type="radio" name="ai-human" value="ai" id="ai" onChange={this.handleRadio} /></label>
            <label htmlFor="human" >Human<input chekced={radio === 'human' ? 'checked' : ''} type="radio" name="ai-human" value="human" id="human" onChange={this.handleRadio} /></label>
          </div>
        </div>
      </form>
    );
  }
}

export default Login;
