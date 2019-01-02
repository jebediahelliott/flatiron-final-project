import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'
import './staticPages.css'


class Edit extends Component {
  constructor(props) {
    super(props)
    let initialState = {}
    this.props.content.paragraphs.forEach((p, idx) => initialState[`paragraph${idx}`] = p.content)
    this.state = initialState
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  newParagraph = () => {
    let i = Object.keys(this.state).length + 1;
    this.setState({
      [`paragraph${i}`]: ''
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();

  }

  render() {
    console.log(this.state)
    let formContent = Object.keys(this.state).map((key, idx) => {
      return (
        <div key={idx}>
          <ControlLabel>Paragragh {idx + 1}</ControlLabel>
          <FormControl
            componentClass="textarea"
            name={`paragraph${idx}`}
            value={this.state[`paragraph${idx}`]}
            onChange={this.handleChange}
          />
        </div>
      )
    })
    return (
      <div className="staticLayout">
        <h1>{this.props.content.title}</h1>
        <form onSubmit={this.handleSubmit}>
          <FormGroup>
            {formContent}
          </FormGroup>
          <Button onClick={this.newParagraph}>Add New Paragragh</Button>
          <Button type="submit">Submit</Button>
        </form>
      </div>
    )
  }
}

export default Edit;
