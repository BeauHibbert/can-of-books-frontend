import React, { Component } from "react";
import { Button } from "react-bootstrap";
export default class BookInfo extends Component {
  render() {
    return (
      <div>
        <p>{this.props.book.title}</p>
        <p>{this.props.book.description}</p>
        <Button
          onClick={() => this.props.deleteBook(this.props.book._id)}
          variant='danger'
        >
          Delete
        </Button>
      </div>
    );
  }
}
