import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UpdateModal from './UpdateModal';
export default class BookInfo extends Component {
  render() {
    return (
      <div>

        <p>{this.props.book.title}</p>
        <p>{this.props.book.description}</p>
        
        <Button onClick={() => this.props.deleteBook(this.props.book._id)} variant='danger'>
          Delete
        </Button>
        {/* <UpdateModal updateBook ={this.updateBook} book={this.props.book} showModal = {this.props.showModal} closeModal = {this.closeModal} /> */}
        <Button onClick={() => this.props.updateBook(this.props.book._id)} variant='primary'>
          Update
        </Button>
      </div>
    );
  }
}
