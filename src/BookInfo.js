import React, { Component } from "react";
import { Button } from "react-bootstrap";
import UpdateModal from "./UpdateModal";

export default class BookInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showUpdateModal: false,
    };
    // this.closeModal = this.closeModal.bind();  
  }


  handleUpdateButtonClick = () => {
    this.setState({showUpdateModal: true});
    // return (
    //   <UpdateModal 
    //   // call update book on modal submit
    //   />
    // )
  }

  closeModal = () => {
    this.setState({showUpdateModal: false});
  }


  
  render() {
    
    return (
      <div>

        <p>{this.props.book.title}</p>
        <p>{this.props.book.description}</p>

        <Button onClick={() => this.props.deleteBook(this.props.book._id)} variant='danger'>
          Delete
        </Button>

        {/* <Button 
          onClick={() => {
            this.handleUpdateButtonClick
            console.log('this.state.showUpdateModal', this.state.showUpdateModal)
            // this.props.updateBook(this.props.book._id)
          }} 
          variant='primary'
        >
          Update
        </Button> */}

        {this.state.showUpdateModal ? (
           <UpdateModal 
            book={this.props.book}
            closeModal={this.closeModal}
            // call update book on modal submit
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
