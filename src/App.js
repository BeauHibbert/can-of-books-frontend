import 'bootstrap/dist/css/bootstrap.min.css';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import BestBooks from './BestBooks';
import Footer from './Footer';
import Header from './Header';
import Login from './Login';
import Profile from './Profile';




class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      user: null,
      books:[]
    }
  }

  loginHandler = (user) => {
    this.setState({
      user: user,
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
              {this.state.user ? <BestBooks /> : <Login loginHandler={this.loginHandler}/> }
              {/* {this.state.user} books={this.state.books}/> : <Login loginHandler={this.loginHandler}/>; */}
            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
             {/* <Route exact path='/profile'> */}
               {/* <Profile user={this.state.user} /> */}
             {/* </Route> */}
             {/* <Route exact path = "/profile"> */}
             {/* {this.state.user} */}
             {/* </Route> */}

          </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
