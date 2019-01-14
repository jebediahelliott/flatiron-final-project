import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'

class NewClient extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      email: '',
      password: '',
      dogs_attributes: {
        0: {
          name: '',
          breed: '',
          training_notes: ''
        }
      }
    }
  }

  newDog = () => {
    let i = Object.keys(this.state.dogs_attributes).length
    this.setState({
      dogs_attributes: {
        ...this.state.dogs_attributes,
        [i]: {
          name: '',
          breed: '',
          training_notes: ''
        }
      }
    })
  }

  handleDogChange = (event) => {
    let key = event.target.dataset.key
    this.setState({
      dogs_attributes: {
        ...this.state.dogs_attributes,
        [key]: {
          ...this.state.dogs_attributes[key],
          [event.target.name]: event.target.value
        }
      }
    })
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  handleSubmit = (event) => {
    event.preventDefault()
    let user = {user: this.state}
    console.log('A')
    this.props.addUser(user)
    console.log('B')
    this.props.history.push(`/admin/clients/${this.state.name}`)
  }


  render() {
    let dogs = Object.keys(this.state.dogs_attributes).map((key) => {
      return (
        <div key={key}>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type='text'
            data-key={key}
            name='name'
            value={this.state.dogs_attributes[key]['name']}
            onChange={this.handleDogChange}
          />
          <ControlLabel>Breed</ControlLabel>
          <FormControl
            type='text'
            data-key={key}
            name='breed'
            value={this.state.dogs_attributes[key]['breed']}
            onChange={this.handleDogChange}
          />
          <ControlLabel>Notes</ControlLabel>
          <FormControl
            type='text'
            data-key={key}
            name='training_notes'
            value={this.state.dogs_attributes[key]['training_notes']}
            onChange={this.handleDogChange}
          />
        </div>
      )
    })
    return (
      <div className='staticLayout'>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            <ControlLabel>Name</ControlLabel>
            <FormControl
              type='text'
              name='name'
              value={this.state.name}
              onChange={this.handleChange}
            />
            <ControlLabel>Email</ControlLabel>
            <FormControl
              type='text'
              name='email'
              value={this.state.email}
              onChange={this.handleChange}
            />
            <ControlLabel>Password</ControlLabel>
            <FormControl
              type='password'
              name='password'
              value={this.state.password}
              onChange={this.handleChange}
            />
            <h3>Dogs</h3>
            {dogs}
          </FormGroup>
          <Button onClick={this.newDog}>Add Another Dog</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default NewClient
