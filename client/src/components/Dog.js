import React from 'react'
import './Dog.css'

const Dog = props => {
  return (
    <div className='dogCard'>
      <h1>{props.dog.name}</h1>
      <h3>{props.dog.breed}</h3>
      <h4>Training Notes</h4>
      <p>{props.dog.training_notes}</p>
    </div>
  )
}

export default Dog;
