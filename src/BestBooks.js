import React from 'react';
import { Carousel,Card} from 'react-bootstrap';
import axios from 'axios';
import './main.css';
import BookFormModal from './BookFormModal';
import DeleteButton from './DeleteButton';
const url = process.env.REACT_APP_LOCALHOST

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
    }
  }
   
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  fetchBooks = async () => {
    let url = `${process.env.REACT_APP_LOCALHOST}/books?`
    if (this.props.user) {
      url = `${process.env.REACT_APP_LOCALHOST}/books?email=${this.state.user.email}`
    }
    try {
      let result = await axios.get(url);
      console.log('result', result.data)
      this.setState({books: result.data})
    }catch (error) {
      console.log(error)
    }
  }
  

  componentDidMount() {
    this.fetchBooks();
  }
  
  
  makeBook = async (bookMaker) => {
    try {
      const bookResponse = await axios.post(url + '/books:id', bookMaker);
      this.setState({books: [...this.state.books, bookResponse.data]});
      <Carousel.Item>{bookResponse.data.title}: {bookResponse.data.description}</Carousel.Item>
    }catch (e) {
      console.error(e)
    }
  }

  deleteBook = async (id) => {
    try {
    await axios.delete(url + '/books/' + id);

    const updatedBooks = this.state.books.filter(book => book._id !== id)
    this.setState({ books: updatedBooks})
  } catch (e) {
    console.error(e)
  }
}

handleSubmit = (e) => {
  e.preventDefault()
  
  const bookMaker = {
  title: e.target.title.value,
  description: e.target.description.value,
  // read: e.target.read.value,
  email: e.target.email.value,
}
console.log(bookMaker);
this.makeBook(bookMaker);
// e.target.reset()
}


  render() {
    return (
      <>
      {/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2> */}
      {this.state.books.length > 0 ?
       <Card className='carousel-wrapper'>

         <Carousel>
        {/* {this.state.books.map((book) => <Carousel.Item><Carousel.Caption>{book.title}</Carousel.Caption></Carousel.Item>) } */}
       
        {this.state.books.map((book) => <Carousel.Item>{book.title}: {book.description} <DeleteButton deleteBook={this.deleteBook}/></Carousel.Item>)}
        </Carousel>
       </Card> : 
       <p>Sorry, there are no books in this collection</p>
      }
      <BookFormModal books={this.state.books} handleSubmit={this.handleSubmit}/>
      </>

      
    )
  }
}

export default BestBooks;