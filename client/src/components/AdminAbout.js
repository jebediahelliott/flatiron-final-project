import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import About from './About'
import Edit from './Edit'

class AdminAbout extends Component {
  constructor() {
    super()
    this.state = {
      edit: false
    }
  }

  handleEdit = () => {
    this.setState({
      edit: true
    })
  }

  render() {
    return (
      <div>
        {this.state.edit ? (
          <Edit content={this.props.content} />
        ) : (
          <About content={this.props.content} handleEdit={this.handleEdit} />
        )}
      </div>
    )
  }
}

export default AdminAbout;
