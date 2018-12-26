import React from 'react'
import { Button } from 'react-bootstrap'


const FAQ = props => {
  const pcontent = props.content[1].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
  return (
    <div className='staticLayout'>
      <h1>{props.content[1].title}</h1>
      {pcontent}
      {props.handleEdit ? <Button onClick={() => props.handleEdit(1)}>Edit</Button> : null}
    </div>
  )
}

export default FAQ;
