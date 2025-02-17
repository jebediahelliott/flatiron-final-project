import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class Contact extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      email: '',
      phone: '',
      message: ''
    }
  }

  handleSubmit = (event) => {
    event.preventDefault()
    const inquiryInfo = {name: this.state.name, email: this.state.email, message: this.state.message, phone_number: this.state.phone}
    this.props.handleInquiry(inquiryInfo)
    this.setState({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
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
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type="text"
              name="name"
              value={this.state.name}
              onChange={this.handleChange}
            />
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
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }

}

export default Contact;
