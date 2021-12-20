import React, { Component } from 'react'
import { Modal,Container,Form,Button } from 'react-bootstrap';

export default class UpdateModal extends Component {

  closeModal = () => {
    this.props.closeModal()
  }

  handleSubmit = (e) => {
    e.preventDefault();
    console.log('old title: ', this.props.book.title)
    console.log('old desc: ', this.props.book.description)
    console.log('old status: ', this.props.book.status)

    const updatedBook = {
      title: e.target.title.value || this.props.book.title,
      description: e.target.description.value || this.props.book.description,
      status: e.target.status.value || this.props.book.status,
      id: this.props.book._id
    };

    this.props.updateBook(updatedBook);
    console.log('updatedBook in update modal after call to this.props.updateBook', updatedBook);
    this.closeModal();
  };

  render() {
    return (
      <Modal show={true} onHide={this.closeModal}>
        <Modal.Header closeButton>
          <Modal.Title>Update a Book</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className='mb-3' controlId='title'>
                <Form.Label>Book Title</Form.Label>
                <Form.Control type='text' placeholder='title' />
              </Form.Group>
              <Form.Group className='mb-3' controlId='description'>
                <Form.Label>Description</Form.Label>
                <Form.Control type='text' placeholder='description'/>
              </Form.Group>
              <Form.Group className='mb-3' controlId='status'>
                <Form.Label type='checkbox'>Read?</Form.Label>
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
