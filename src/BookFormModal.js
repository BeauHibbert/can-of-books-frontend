import React, { Component } from 'react'
import {Modal,Button,Form} from 'react-bootstrap'
export default class BookFormModal extends Component {


  render() {
    return (
      <div>
        <Modal.Dialog>
          <Modal.Header closeButton>
            <Modal.Title>Modal title</Modal.Title>
            </Modal.Header>
            <Modal.Body>
            <Form onSubmit={this.handleSubmit}>
              <Form.Group className="mb-3" controlId="BookTitle">
                <Form.Label>Book Title</Form.Label>
                <Form.Control type="text" placeholder="Enter Book Title" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="BookDescription">
                  <Form.Label>Book Description</Form.Label>
                  <Form.Control type="text" placeholder="Enter Book Description" />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formCheckbox">
                    <Form.Check type="checkbox" label="Finished" />
                    </Form.Group>
                    <Button variant="primary" type="submit">
                      Submit
                      </Button>
                      </Form>
              </Modal.Body>
              <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>Close</Button>
                <Button variant="primary" onClick={save}>Save changes</Button>
                </Modal.Footer>
                </Modal.Dialog>
      </div>
    )
  }
}
