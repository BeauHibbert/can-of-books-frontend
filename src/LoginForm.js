import { Component } from "react";
import { Form,Button} from 'react-bootstrap'

class LoginForm extends Component {
  handleSubmit = (e) => {
    e.preventDefault()
   const user = {name: e.target.userName.value, email: e.target.email.value}
   this.props.loginHandler(user)
  }

  render() {
    /* TODO: create a simple login form that collects username and and email, and lets parent component know when form has been submitted */
    return (
    <Form onSubmit={this.handleSubmit}>
  <Form.Group className="mb-3" controlId="userName">
    <Form.Label>User Name</Form.Label>
    <Form.Control type="text" placeholder="User Name" />
  </Form.Group>

  <Form.Group className="mb-3" controlId="email">
    <Form.Label>Email Address</Form.Label>
    <Form.Control type="email" placeholder="Enter Email" />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Submit
  </Button>
    </Form>
    );
  }
};

export default LoginForm;
