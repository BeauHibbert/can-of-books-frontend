import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import Button from 'react-bootstrap/Button';

class LogoutButton extends Component {
  render() {

    return (
      <Button variant="success" onClick={this.props.auth0.logout}>Log Out</Button>
    )
  }
}


export default withAuth0(LogoutButton);
