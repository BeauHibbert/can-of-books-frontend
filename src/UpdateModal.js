import React, { Component } from 'react'
import { Modal,Container,Form,Button } from 'react-bootstrap';

export default class UpdateModal extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     showUpdateModal: false,
  //   };
  //   // this.closeModal = this.closeModal.bind();  
  // }


  // handleUpdateButtonClick = () => {
  //   this.setState({showUpdateModal: true});
  // }

  closeModal = () => {
    this.props.closeModal()
  }

  handleSubmit = (e) => {
    // console.log('hitting here')
    e.preventDefault();
    const updatedBook = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
    };
    // console.log('updatedBook: ', updatedBook);
    // console.log('_id', this.props.book._id)
    // this.props.updateBook(updatedBook, this.props.book._id)
    // this.props.closeModal();
  };

  render() {
    return (
      // <Modal show={this.props.handleUpdateModalClick} onHide={this.props.closeModal}>
      <Modal show={true} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className='mb-3' controlId='title'>
                <Form.Label>Book Title</Form.Label>
                {/* <Form.Control type='text' placeholder={this.props.book.title} /> */}
                <Form.Control type='text' placeholder='title' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='description'>
                <Form.Label>Description</Form.Label>
                {/* <Form.Control type='text' placeholder={this.props.book.description} /> */}
              
              </Form.Group>
              <Form.Group className='mb-3' controlId='status'>
                <Form.Label type='checkbox' label='Read?' />
                {/* <Form.Control type='text' placeholder={this.props.book.status} /> */}
                <Form.Control type='text' placeholder='status' />
              </Form.Group>
              <Button variant='primary' type='submit'>
                Update
              </Button>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    );
  }
}
