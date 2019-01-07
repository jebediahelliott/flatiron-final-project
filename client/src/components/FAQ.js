import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class FAQ extends Component {
  pcontent = this.props.content[1].paragraphs.map(p => <p key={p.id}>{p.content}</p>)

  componentDidMount() {
    if (!!this.props.trackPage) {
      this.props.trackPage(this.props.match.path, 1);
    }
  }

  render() {
    return (
      <div className='staticLayout'>
        <h1>{this.props.content[1].title}</h1>
        {this.pcontent}
        {this.props.trackPage ? <Link to={`/edit${this.props.match.path}`}><Button>Edit</Button></Link> : null}
      </div>
    )
  }

}

export default FAQ;
