import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

export default class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
    };
  }

  handleUpdateButtonClick = () => {
    this.setState({showUpdateModal: true});
  }

  closeModal = () => {
    this.setState({showUpdateModal: false});
  }

  render() {
    
    return (
      <div>
        <div id="book-info">
          <p>{this.props.book.title}</p>
          <p>{this.props.book.description}</p>
        </div>

        <Button 
          onClick={() => this.props.deleteBook(this.props.book._id)} 
          variant='danger'
        >
          Delete
        </Button>

        {this.state.showUpdateModal ? (
           <UpdateModal 
            book={this.props.book}
            closeModal={this.closeModal}
            updateBook={this.props.updateBook}
          />
        ) : (
          <Button 
            onClick={this.handleUpdateButtonClick}
            variant='primary'
          >
            Update
          </Button>
        )} 
      </div>
    );
  }
}
