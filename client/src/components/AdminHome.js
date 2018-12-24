import React from 'react'
import { Button } from 'react-bootstrap'


const AdminHome = props => {
  const pcontent = props.content[0].paragraphs.map(p => <p key={p.id}>{p.content}</p>)
  return (
    <div className='staticLayout'>
      <h1>{props.content[0].title}</h1>
      {pcontent}
      <Button>Edit</Button>
    </div>
  )
}

export default AdminHome;
