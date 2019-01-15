import React, { Component } from 'react'
import { Button } from 'react-bootstrap'


class Paragraph extends Component {
  state = {
    counter: 0
  }

  incrementCounter = () => {
    let counter = this.state.counter + 1
    this.setState({
      counter: counter
    })
  }

  render() {
    return (
      <div>
        <p>{this.props.content}</p>
        <Button onClick={this.incrementCounter}>Like</Button><span> {this.state.counter}</span>
      </div>
    )
  }
}

export default Paragraph;
