import React, { Component } from 'react'
import {Modal,Button,Form,Container, } from 'react-bootstrap'




export default class BookFormModal extends Component {
  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Container>
        <Form onSubmit={this.props.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Book Title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="description">
            <Form.Label>Description</Form.Label>
            <Form.Control type="text" placeholder="New York" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="email">
            <Form.Label>email</Form.Label>
            <Form.Control type="text" placeholder="email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="status">
            <Form.Check type="checkbox" label="Read?" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Add a Book
          </Button>
        </Form>
      </Container>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="primary" type="submit">Save changes</Button>
                </Modal.Footer>
                </Modal.Dialog>
      </div>
    )
  }
}
