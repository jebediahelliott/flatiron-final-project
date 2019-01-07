import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import FAQ from './FAQ'
import Edit from './Edit'


class AdminFAQ extends Component {
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
        <FAQ content={this.props.content} trackPage={this.props.trackPage} handleEdit={this.handleEdit} />
      </div>
    )
  }
}


export default AdminFAQ;
