import React, { Component } from "react";
import { Carousel,Card } from "react-bootstrap";
import BookInfo from "./BookInfo";
export default class BookCarousel extends Component {
  
  
  render() {
    return (
      <Card>
        <Carousel>
          {/* {this.state.books.map((book) => <Carousel.Item><Carousel.Caption>{book.title}</Carousel.Caption></Carousel.Item>) } */}
          
          {this.props.books.map((book) => (
            <Carousel.Item>
              <BookInfo key={book._id} book={book} deleteBook={this.props.deleteBook} updateBook={this.props.updateBook}  books={this.props.books}  showModal={this.props.showModal} onClick={this.handleClick} closeModal={this.closeModal} postBook={this.postBook}/>
              <Carousel.Caption>
                
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </Card>
    );
  }
}
