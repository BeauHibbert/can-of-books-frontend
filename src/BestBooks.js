import React from 'react';
import { Carousel } from 'react-bootstrap';
import axios from 'axios';
import './main.css';

class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: []
    }
  }
   
  /* TODO: Make a GET request to your API to fetch books for the logged in user  */
  fetchBooks = async () => {
    try {
      let result = await axios.get(`${process.env.REACT_APP_LOCALHOST}/books`);
      console.log('result', result.data)
      this.setState({books: result.data})
    }catch (error) {
      console.log(error)
    }
  }

  componentDidMount() {
    this.getCats();
  }



  render() {
    return (
      <>
      {/* <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2> */}
      {this.state.books.length > 0 ?
       <div className='carousel-wrapper'>
         <Carousel>
        {/* {this.state.books.map((book) => <Carousel.Item><Carousel.Caption>{book.title}</Carousel.Caption></Carousel.Item>) } */}
        {this.state.books.map((book) => <Carousel.Item>{book.title}: {book.description}</Carousel.Item>)}
        </Carousel>
       </div> : 
       <p>Sorry, there are no books in this collection</p>
      }
      </>
    )
  }
}

export default BestBooks;