import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'
import './staticPages.css'


class Edit extends Component {
  constructor(props) {
    super(props)
    let initialState = {}
    let pars = this.props.content.paragraphs
    debugger
    this.props.content.paragraphs.forEach((p, idx) => initialState[`paragraph${idx}`] = {id: p.id, content: p.content})
    this.state = initialState
  }

  handleChange = (event) => {
    this.setState({
      [event.target.dataset.index]: {
        ...this.state[event.target.dataset.index],
        content: event.target.value
      }
    })
  }

  newParagraph = () => {
    let i = Object.keys(this.state).length + 1;
    this.setState({
      [`paragraph${i}`]: {content: '', id: null}
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let parAttrs = {}
    Object.keys(this.state).forEach((key, idx) => parAttrs[idx] = {content: this.state[key].content, id: this.state[key].id})
    let data = {
      static_page: {
        title: this.props.content.title,
        paragraphs_attributes: parAttrs
      }
    }
    debugger
    this.props.handleStaticEdit(this.props.content.id, data)
  }

  render() {
    let formContent = Object.keys(this.state).map((key, idx) => {
      return (
        <div key={idx}>
          <ControlLabel>Paragragh {idx + 1}</ControlLabel>
          <FormControl
            componentClass="textarea"
            data-index={key}
            name={'static_page[paragraphs_attributes][][content]'}
            value={this.state[key]['content']}
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
