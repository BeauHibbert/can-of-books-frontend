import React, { Component } from 'react';
import { Button } from 'react-bootstrap';
export default class DeleteButton extends Component {
  render() {
    return (
      <div>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}</p>
          {console.log('book to delete: ', this.props.book._id)}
          <Button onClick={() => this.props.deleteBook(this.props.book._id)} varient="secondary">Delete</Button>
      </div>
    )
  }
}