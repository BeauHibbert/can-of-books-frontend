import { Component } from "react";
import { withAuth0 } from "@auth0/auth0-react";
import {Card} from 'react-bootstrap'
class Profile extends Component {

  render() {
    /* TODO: render information about logged in user */
    
    /* STRETCH TODO: if no logged in user then redirect home */
    return (
    <Card>
      NameL:{this.props.auth0.user.name}
      Email: {this.props.auth0.user.email}
      </Card>)
  }
};

export default withAuth0(Profile);
