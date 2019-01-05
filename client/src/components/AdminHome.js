import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import About from './About'
import Edit from './Edit'

class AdminHome extends Component {
  constructor() {
    super()
    this.state = {
      edit: false,
      index: null
    }
  }

  handleEdit = (index) => {
    this.setState({
      edit: true,
      index: index
    })
  }

  render() {
    return (
      <div>
        {this.state.edit ? (
          <Edit content={this.props.content[`${this.state.index}`]} handleStaticEdit={this.props.handleStaticEdit} contentIndex={this.state.index} />
        ) : (
          <About content={this.props.content} handleEdit={this.handleEdit} />
        )}
      </div>
    )
  }
}

export default AdminHome;
