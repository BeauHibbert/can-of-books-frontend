import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
export default class DeleteButton extends Component {
  render() {
    return (
      <div>
          <Button variant="outline-danger" onClick={this.props.deleteBook}>Delete Book</Button>{' '}
      </div>
    )
  }
}