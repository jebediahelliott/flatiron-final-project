import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


class Home extends Component {
  pcontent = () => {
    if (this.props.content[0].paragraphs) {
      return this.props.content[0].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
    }else if (this.props.content[0].paragraphs_attributes) {
      let pars = this.props.content[0].paragraphs_attributes
      return Object.keys(pars).map(p => <p key={pars[p]['id']}>{pars[p]['content']}</p>)
    }
  }
  componentDidMount() {
    if (!!this.props.trackPage) {
      this.props.trackPage(this.props.match.path, 0);
    }
  }

  render() {
    return (
      <div className='staticLayout'>
        <h1>{this.props.content[0].title}</h1>
        {this.pcontent()}
        {this.props.trackPage ? <Link to={`${this.props.match.path}/edit`}><Button>Edit</Button></Link> : null}
      </div>
    )
  }
}

export default Home;
