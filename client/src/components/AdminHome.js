import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import About from './About'
import Edit from './Edit'

class AdminHome extends Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      id: null
    }
  }

  handleEdit = (id) => {
    this.setState({
      edit: true,
      id: id
    })
  }

  render() {
    return (
      <div>
        {this.state.edit ? (
          <Edit content={this.props.content[`${this.state.id}`]} handleStaticEdit={this.props.handleStaticEdit} />
        ) : (
          <About content={this.props.content} handleEdit={this.handleEdit} />
        )}
      </div>
    )
  }
}

export default AdminHome;
