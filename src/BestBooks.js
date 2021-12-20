import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import BookCarousel from "./BookCarousel";
import BookFormModal from "./BookFormModal";
import "./main.css";
import { withAuth0 } from '@auth0/auth0-react';



class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false
    };
    this.closeModal = this.closeModal.bind();  
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const bookMaker = {
      title: e.target.title.value,
      description: e.target.description.value,
       read: e.target.read.value,
      email: e.target.email.value,
    };
    console.log(bookMaker);
    this.makeBook(bookMaker);
    // e.target.reset()
    this.closeModal();
  };

  handleClick = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };

  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      // axios npm
      const config = {
        method: 'get',
        baseURL: process.env.REACT_APP_LOCALHOST,
        url: '/books',
        headers: { "Authorization": `Bearer ${jwt}`}
      }

      const bookResponse = await axios(config);
      this.setState({ books: bookResponse.data });

    }
  }

  deleteBook = async (id) => {
    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      // axios npm
      const config = {
        method: 'delete',
        baseURL: process.env.REACT_APP_LOCALHOST,
        url: `/books/${id}`,
        headers: { "Authorization": `Bearer ${jwt}`}
      }
    try {
      await axios(config)
      console.log('this.state.books before delete', this.state.books)
      const updatedBooks = this.state.books.filter(book => book._id !== id);
      this.setState({ books: updatedBooks });
      console.log('this.state.books after delete', this.state.books)
    } catch (e) {
      console.error(e);
    }
  };
}

  postBook = async (userBook) => {

    if (this.props.auth0.isAuthenticated) {
      const res = await this.props.auth0.getIdTokenClaims();

      const jwt = res.__raw;
      // axios npm
      const config = {
        method: 'post',
        baseURL: process.env.REACT_APP_LOCALHOST,
        url: '/books',
        data: userBook,
        headers: { "Authorization": `Bearer ${jwt}`}
      }
    try {
      const bookResponse = await axios(config)
      this.setState({ books: [...this.state.books, bookResponse.data ] });
    } catch (e) {
      console.error(e);
    }
  };
}

  updateBook = async (updatedBook) => {
    if (this.props.auth0.isAuthenticated) {
      console.log('book obj getting passed into update', updatedBook)
      console.log('id getting passed into updateBook', updatedBook.id);
      const res = await this.props.auth0.getIdTokenClaims();
      const jwt = res.__raw; //json web token
 
      const config = {
        method: 'put',
        baseURL: process.env.REACT_APP_LOCALHOST,
        url: `/books/${updatedBook.id}`,
        headers: { "Authorization": `Bearer ${jwt}`}
      }

      try {
        const updateBook = await axios(config)
        const newBookState = this.state.books.map(book => {
        if (book._id === updatedBook.id) {
          book.title = updatedBook.title;
          book.description = updatedBook.description;
          book.status = updatedBook.status;
          console.log('updated book in updateBook func (old)', book)
          return updateBook.data;
        }
        return book;
      })
      this.setState({books: newBookState})
      console.log('this.state.books after update: ', this.state.books)
    } catch (e) {
      console.error(e)
      console.log('error updating book')
    }
  }
}

  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>
        {this.state.books.length ? (
          <BookCarousel  deleteBook={this.deleteBook} books={this.state.books} updateBook={this.updateBook}  postBook={this.postBook}/> 
          ) : (
          <p>Sorry, there are no books in this collection</p>
        )}
        {this.state.showModal ? (
          <BookFormModal showModal={this.state.showModal} onClick={this.handleClick} closeModal={this.closeModal} postBook={this.postBook}/>
        ) : (
          <Button onClick={this.handleClick}>Add a book</Button>
        )}
      </>
      )  
    }
  } 


export default withAuth0(BestBooks);
