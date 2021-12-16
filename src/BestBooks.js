import axios from "axios";
import React from "react";
import { Button } from "react-bootstrap";
import BookCarousel from "./BookCarousel";
import BookFormModal from "./BookFormModal";
import "./main.css";
const url = process.env.REACT_APP_LOCALHOST;

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      showModal: false,
    };
  }

  handleSubmit = (e) => {
    e.preventDefault();

    const bookMaker = {
      title: e.target.title.value,
      description: e.target.description.value,
      // read: e.target.read.value,
      email: e.target.email.value,
    };
    console.log(bookMaker);
    this.makeBook(bookMaker);
    // e.target.reset()
  };

  handClick = () => {
    this.setState({ showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false });
  };
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  getBooks = async () => {
    let url = `${process.env.REACT_APP_LOCALHOST}/books?`;
    if (this.props.user) {
      url = `${process.env.REACT_APP_LOCALHOST}/books?email=${this.props.user.email}`;
    }
    try {
      let result = await axios.get(url);
      console.log("result", result.data);
      this.setState({ books: result.data });
    } catch (error) {
      console.log(error);
    }
  };
  deleteBook = async (id) => {
    try {
      await axios.delete(`${url}/books/${id}?email=${this.props.user.email}`);

      const updatedBooks = this.state.books.filter((book) => book._id !== id);
      this.setState({ books: updatedBooks });
    } catch (e) {
      console.error(e);
    }
  };

  postBook = async (bookObj) => {
    try {
      const bookResponse = await axios.post(
        `${process.env.REACT_APP_LOCALHOST}/books?email=${this.props.user.email}`,
        bookObj
      );
      this.setState({ books: [...this.state.books, bookResponse.data] });
    } catch (e) {
      console.error(e);
    }
  };
  componentDidMount() {
    this.getBooks();
  }

  render() {
    return (
      <>
        {/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2> */}
        {this.state.books.length > 0 ? (
          <BookCarousel deleteBook={this.deleteBook} books={this.state.books} />
        ) : (
          // <Card className='carousel-wrapper'>
          //   <Carousel>
          //     {/* {this.state.books.map((book) => <Carousel.Item><Carousel.Caption>{book.title}</Carousel.Caption></Carousel.Item>) } */}

          //     {this.state.books.map((book) => (
          //       <Carousel.Item>
          //         {book.title}: {book.description}{" "}
          //         <DeleteButton deleteBook={this.props.deleteBook} />
          //       </Carousel.Item>
          //     ))}
          //   </Carousel>
          // </Card>
          <p>Sorry, there are no books in this collection</p>
        )}
        {this.state.ShowModal ? (
          <BookFormModal
            showModal={this.state.showModal}
            onClick={this.handleClick}
            closeModal={this.state.closeModal}
            postBook={this.postBook}
          />
        ) : (
          <Button>Login</Button>
        )}
      </>
    );
  }
}

export default BestBooks;
