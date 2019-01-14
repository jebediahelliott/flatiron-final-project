import React from 'react'
import { Button } from 'react-bootstrap'


const Paragraph = props => {

  return (
    <div>
      <p>{props.content}</p>
      <Button>Like</Button>
    </div>
  )
}

export default Paragraph;
