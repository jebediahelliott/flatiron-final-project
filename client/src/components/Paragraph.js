import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


class Paragraph extends Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: this.props.paragraph.counter
    }
  }


  persistCounter = (id) => {
    let data = {paragraph: {
      counter: this.state.counter + 1
    }}
    fetch(`/paragraphs/${id}`, {
      headers: {
        "Content-Type": "application/json",
      },
      method: 'put',
      body: JSON.stringify(data)
    })
  }

  incrementCounter = () => {
    let counter = this.state.counter + 1
    this.setState({
      counter: counter
    })
    this.persistCounter(this.props.paragraph.id)
  }

  render() {
    return (
      <div>
        <p>{this.props.paragraph.content}</p>
        <Button onClick={this.incrementCounter}>Like</Button><span> {this.state.counter}</span>
      </div>
    )
  }
}

export default Paragraph;
