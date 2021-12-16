import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
export default class DeleteButton extends Component {
  render() {
    return (
      <div>
          <h3>{this.book.props.title}</h3>
          <p>{this.props.book.description}</p>
          <Button onClick={() => this.props.deleteBook(this.props.book._id)} varient="secondary">Delete</Button>
      </div>
    )
  }
}