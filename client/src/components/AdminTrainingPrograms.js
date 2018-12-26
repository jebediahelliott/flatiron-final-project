import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import TrainingPrograms from './TrainingPrograms'
import Edit from './Edit'


class AdminTrainingPrograms extends Component {
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
          <TrainingPrograms content={this.props.content} handleEdit={this.handleEdit} />
        )}
      </div>
    )
  }
}

export default AdminTrainingPrograms;
