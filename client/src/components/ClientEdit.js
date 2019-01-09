import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

class NewClient extends Component {
  constructor(props) {
    super(props)
    let dogs = {}
    this.props.client.dogs.forEach((dog, idx) => dogs[idx] = dog)
    this.state = {
      name: this.props.client.name,
      email: this.props.client.email ,
      id: this.props.client.id,
      dogs_attributes: dogs
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
    this.props.editUser(user)
    this.props.history.push(`/admin/clients/${this.state.name}`)
  }

  handleDelete = () => {
    let user = {user: this.state}
    this.props.deleteUser(user)
    this.props.history.push('/admin/clients')
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
            <h3>Dogs</h3>
            {dogs}
          </FormGroup>
          <Button onClick={this.newDog}>Add Another Dog</Button>
          <Button onClick={this.handleDelete}>Delete User</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default NewClient
