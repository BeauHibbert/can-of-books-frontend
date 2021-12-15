import { Component } from 'react'
import { Button } from 'react-bootstrap';
import LoginForm from './LoginForm';

export default class LoginButton extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showButton: true
    }
  }
handleClick = () => {
  this.setState({showButton: false})
}
  render() {
    return (
    <>
      {this.state.showButton ? <Button onClick={this.handleClick}>Login</Button> : <LoginForm loginHandler={this.props.loginHandler}/>}
      </>
    );
  }
};
