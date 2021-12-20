import React, { Component } from 'react'
import { Modal,Container,Form,Button } from 'react-bootstrap';

export default class UpdateModal extends Component {
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
    this.props.updateBook(updatedBook, this.props.book._id)
    this.props.closeModal();
  };
  render() {
    return (
      <>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className='mb-3' controlId='title'>
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control type='text' placeholder={this.props.book.title} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='description'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type='text' placeholder={this.props.book.description} />
                </Form.Group>
                <Form.Group className='mb-3' controlId='status'>
                  <Form.Label type='checkbox' label='Read?' />
                  <Form.Control type='text' placeholder={this.props.book.status} />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Add a Book
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </>
    );
  }
}
