import { Component } from 'react'

export default class LoginButton extends Component {

  render() {
    return (
      <button onClick={this.props.onLogin}>
        Log In
      </button>
    );
  }
};
