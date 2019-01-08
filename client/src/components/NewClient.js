import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

class NewClient extends Component {
  constructor() {
    super()
    this.state = {
      name: '',
      dogs: {
        0: {
          name: '',
          breed: '',
          notes: ''
        }
      }
    }
  }

  newDog = () => {
    let i = Object.keys(this.state).length
    this.setState({
      dogs: {
        ...this.state.dogs,
        [i]: {
          name: '',
          breed: '',
          notes: ''
        }
      }
    })
  }

  handleDogChange = (event) => {
    let key = event.target.dataset.key
    this.setState({
      dogs: {
        ...this.state.dogs,
        [key]: {
          ...this.state.dogs[key],
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
    debugger
  }


  render() {
    let dogs = Object.keys(this.state.dogs).map((key) => {
      return (
        <div key={key}>
          <ControlLabel>Name</ControlLabel>
          <FormControl
            type='text'
            data-key={key}
            name='name'
            value={this.state.dogs[key]['name']}
            onChange={this.handleDogChange}
          />
          <ControlLabel>Breed</ControlLabel>
          <FormControl
            type='text'
            data-key={key}
            name='breed'
            value={this.state.dogs[key]['breed']}
            onChange={this.handleDogChange}
          />
          <ControlLabel>Notes</ControlLabel>
          <FormControl
            type='text'
            data-key={key}
            name='notes'
            value={this.state.dogs[key]['notes']}
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
