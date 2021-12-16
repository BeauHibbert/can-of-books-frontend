import React, { Component } from "react";
import { Carousel } from "react-bootstrap";
import BookInfo from "./BookInfo";
export default class BookCarousel extends Component {
  render() {
    return (
      <div>
        <Carousel>
          {/* {this.state.books.map((book) => <Carousel.Item><Carousel.Caption>{book.title}</Carousel.Caption></Carousel.Item>) } */}

          {this.props.books.map((book) => (
            <Carousel.Item>
              <Carousel.Caption>
                <BookInfo key={book._id} book={book} />
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
    );
  }
}
