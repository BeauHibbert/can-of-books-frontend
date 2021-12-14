import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Profile from './Profile'
import BestBooks from './BestBooks';
import Login from './Login';
import 'bootstrap/dist/css/bootstrap.min.css';
import {BrowserRouter as Router,Switch,Route,
} from "react-router-dom";

class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
    }
  }

  loginHandler = (user) => {
    this.setState({
      user,
    })
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler} />
          <Switch>
          <BestBooks />
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? <BestBooks/> : <Login loginHandler={this.loginHandler}/>}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            <Route exact path='/profile'>
              <Profile user={this.state.user} />
            </Route>
            <Route exact path = "/profile">
            {this.state.user}
            </Route>
            
          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
