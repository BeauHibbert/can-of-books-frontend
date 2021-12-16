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
    }, this.getBooks)
  }

  logoutHandler = () => {
    this.setState({
      user: null,
    })
  }
  
  // getBooks = async () => {
  //   let url = `${process.env.REACT_APP_LOCALHOST}/books?`;
  //   if (this.props.user) {
  //     url = `${process.env.REACT_APP_LOCALHOST}/books?email=${this.state.user.email}`;
  //   }
  //   try {
  //     let result = await axios.get(url);
  //     console.log("result", result.data);
  //     this.setState({ books: result.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };

  // getBooks = async () => {
  //   let url = `${process.env.REACT_APP_LOCALHOST}/books?`;
  //   if (this.state.user) {
  //     url = `${process.env.REACT_APP_LOCALHOST}/books?email=${this.state.user.email}`;
  //     console.log('url if logged in', url);
  //     // return url
  //   }
  //   try {
  //     let result = await axios.get(url);
  //     console.log("result", result.data);
  //     this.setState({ books: result.data });
  //   } catch (error) {
  //     console.log(error);
  //   }
  // };


  // postBook = async (bookObj) => {
  //   console.log('bookObj in postBook: ', bookObj)
  //   try {
  //     const bookResponse = await axios.post(
  //       `${process.env.REACT_APP_LOCALHOST}/books?email=${this.state.user.email}`,
  //       bookObj
  //     );
  //     this.setState({ books: [...this.state.books, bookResponse.data] });
  //   } catch (e) {
  //     console.error(e);
  //   }
  // };

  // componentDidMount() {
  //   this.getBooks();
  // }

  render() {
    return (
      <>
        <Router>
          <Header user={this.state.user} onLogout={this.logoutHandler}  />
          <Switch>
            <Route exact path="/">
              {/* TODO: if the user is logged in, render the `BestBooks` component, if they are not, render the `Login` component */}
              {this.state.user ? <BestBooks deleteBook={this.deleteBook} books={this.state.books} user={this.state.user}/> : <Login loginHandler={this.loginHandler}/> }

            </Route>
            {/* TODO: add a route with a path of '/profile' that renders a `Profile` component */}
            {this.state.user ? 
            <Profile exact path="/profile"
            name={this.state.user.name}
            email={this.state.user.email}>
              </Profile> : <div></div>
              }
              </Switch>
          <Footer />
        </Router>
      </>
    )
  }
}

export default App;
