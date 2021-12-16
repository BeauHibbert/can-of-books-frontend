import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';

class Login extends React.Component {
  render() {
    return (
      <Card Style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text>
            Click Below to Log in
            </Card.Text>
            <LoginButton loginHandler={this.props.loginHandler}/>
            </Card.Body>
            </Card>
    )
  }
}

export default Login;
