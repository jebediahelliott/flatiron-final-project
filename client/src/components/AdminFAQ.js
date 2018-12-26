import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import FAQ from './FAQ'
import Edit from './Edit'


class AdminFAQ extends Component {
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
          <Edit content={this.props.content[`${this.state.id}`]} />
        ) : (
          <FAQ content={this.props.content} handleEdit={this.handleEdit} />
        )}
      </div>
    )
  }
}


export default AdminFAQ;
