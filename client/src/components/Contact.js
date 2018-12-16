import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      phone: '',
      message: ''
    }
  }


  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div className="staticLayout">
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
          <ControlLabel>Email</ControlLabel>
          <FormControl
            type="text"
            name="email"
            value={this.state.email}
            onChange={this.handleChange}
          />
          <ControlLabel>Phone Number</ControlLabel>
          <FormControl
            type="text"
            name="phone"
            value={this.state.phone}
            onChange={this.handleChange}
          />
          <ControlLabel>Tell Us About You and Your Friend</ControlLabel>
          <FormControl
            componentClass="textarea"
            name='message'
            value={this.state.message}
            onChange={this.handleChange}
          />
          </FormGroup>
        </form>
      </div>
    )
  }

}

export default Contact;
