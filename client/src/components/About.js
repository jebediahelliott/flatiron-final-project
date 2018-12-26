import React from 'react'
import { Button } from 'react-bootstrap'


const About = props => {
  const pcontent = props.content[0].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
  return (
    <div className='staticLayout'>
      <h1>{props.content[0].title}</h1>
      {pcontent}
      {props.handleEdit ? <Button onClick={props.handleEdit}>Edit</Button> : null}
    </div>
  )
}

export default About;
