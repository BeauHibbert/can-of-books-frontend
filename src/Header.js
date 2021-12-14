import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from "react-router-dom";
import './Header.css';
import LogoutButton from './LogoutButton'
import LoginButton from './LoginButton'

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        {/* TODO: if the user is logged in, render a navigation link to profile page */}
        {this.props.user ? <NavItem><Link to='/profile' className="profile-link"></Link></NavItem> : null }
        {/* TODO: if the user is logged in, render the `LogoutButton` */}
        {this.props.user ? <LogoutButton/> : <LoginButton/> }
      </Navbar>
    )
  }
}

export default Header;
