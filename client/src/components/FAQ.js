import React, { Component } from 'react'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import Paragraph from './Paragraph'

class FAQ extends Component {
  constructor() {
    super()
    this.state = {
      changeOrder: false
    }
  }




  pcontent = () => {
    if (this.props.content[1].paragraphs) {
      return this.props.content[1].paragraphs.map(p => <Paragraph key={p.id} paragraph={p} />)
    }else if (this.props.content[1].paragraphs_attributes) {
      let pars = this.props.content[1].paragraphs_attributes
      let arr = Object.keys(pars).map(p => pars[p])
      if (this.state.changeOrder === true) {
        arr.sort((a, b) => {
          return a.counter - b.counter
        })
        console.log(pars)
        return arr.map(par => <Paragraph key={par.id} paragraph={par} />)
      }else {
        return arr.map(par => <Paragraph key={par.id} paragraph={par} />)
      }
    }
  }

  reorder = () => {
    this.setState({
      changeOrder: true
    })
  }


  componentDidMount() {
    if (!!this.props.trackPage) {
      this.props.trackPage(this.props.match.path, 1);
    }
  }

  render() {
    return (
      <div className='staticLayout'>
        <h1>{this.props.content[1].title}</h1>
        <Button onClick={this.reorder}>Order by Likes</Button>
        {this.pcontent()}
        {this.props.trackPage ? <Link to={`${this.props.match.path}/edit`}><Button>Edit</Button></Link> : null}
      </div>
    )
  }

}

export default FAQ;



// const FAQ = props => {
//   let pcontent = props.content[1].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
//
//   if (!!props.trackPage) {
//     props.trackPage(props.match.path, 1);
//   }
//
//   return (
//     <div className='staticLayout'>
//       <h1>{props.content[1].title}</h1>
//       {pcontent}
//       {props.trackPage ? <Link to={`/edit${props.match.path}`}><Button>Edit</Button></Link> : null}
//     </div>
//   )
//
// }
