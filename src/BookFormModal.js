import React, { Component } from "react";
import { Button, Container, Form, Modal } from "react-bootstrap";

export default class BookFormModal extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    const newBook = {
      title: e.target.title.value,
      description: e.target.description.value,
      status: e.target.status.value,
    };
    this.props.postBook(newBook);
    this.props.closeModal();
  };
  render() {
    return (
      <div>
        <Modal show={this.props.showModal} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Container>
              <Form onSubmit={this.handleSubmit}>
                <Form.Group className='mb-3' controlId='title'>
                  <Form.Label>Book Title</Form.Label>
                  <Form.Control type='text' placeholder='Book Title' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='description'>
                  <Form.Label>Description</Form.Label>
                  <Form.Control type='text' placeholder='Book Description' />
                </Form.Group>
                <Form.Group className='mb-3' controlId='status'>
                  <Form.Label type='checkbox' label='Read?' />
                  <Form.Control type='text' placeholder='Read/UnRead' />
                </Form.Group>
                <Button variant='primary' type='submit'>
                  Add a Book
                </Button>
              </Form>
            </Container>
          </Modal.Body>
          <Modal.Footer></Modal.Footer>
        </Modal>
      </div>
    );
  }
}
