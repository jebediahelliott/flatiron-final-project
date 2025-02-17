import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, Button } from 'react-bootstrap'
import './staticPages.css'


class Edit extends Component {
  constructor(props) {
    super(props)
    this.state = this.props.content
  }

  handleChange = (event) => {
    let key = event.target.dataset.index
    this.setState({
      paragraphs_attributes: {
        ...this.state.paragraphs_attributes,
        [key]: {
          ...this.state.paragraphs_attributes[key],
          [event.target.name]: event.target.value
        }
      }
    })
  }

  newParagraph = () => {
    let i = Object.keys(this.state.paragraphs_attributes).length;
    this.setState({
      paragraphs_attributes: {
        ...this.state.paragraphs_attributes,
        [i]: {
          content: ''
        }
      }
    })
  }

  handleSubmit = (event) => {
    event.preventDefault();
    let data = {
      static_page: this.state
    }
    this.props.handleStaticEdit(this.props.content.id, data, this.props.index)
    this.props.history.push(this.props.path)
  }

  handleDelete = (id, parentId) => {
    this.props.deleteParagraph(id, parentId)
    let paragraphs = []
    Object.keys(this.state.paragraphs_attributes).forEach(key => {
      if (this.state.paragraphs_attributes[key]['id'] !== id ) {
        paragraphs.push(this.state.paragraphs_attributes[key])
      }
    })
    this.setState({
      paragraphs_attributes: paragraphs
    })
  }


  render() {

    let formContent = Object.keys(this.state.paragraphs_attributes).map((key, idx) => {
      let id = this.state.paragraphs_attributes[key]['id']
      let parentId = this.props.content.id
      return (
        <div key={idx}>
          <ControlLabel>Paragragh {idx + 1}</ControlLabel>
          <FormControl
            componentClass="textarea"
            data-index={key}
            name={'content'}
            value={this.state.paragraphs_attributes[key]['content']}
            onChange={this.handleChange}
          />
          <Button onClick={() => this.handleDelete(id, parentId)}>Delete</Button>
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
