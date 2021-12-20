import React from 'react';
import Card from 'react-bootstrap/Card';
import './Login.css';
import LoginButton from './LoginButton';

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    showButton: true
  }
}
  render() {
    
    return (
      <Card style={{width: '18rem'}}>
        <Card.Body>
          <Card.Title>Login</Card.Title>
          <Card.Text>
            Click Below to Log in
            </Card.Text>
            <LoginButton loginHandler={this.props.loginHandler} showButton={this.state.showButton}/>
            </Card.Body>
            </Card>
    )
  }
}

export default Login;
