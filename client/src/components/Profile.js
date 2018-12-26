import React from 'react'
import Dog from './Dog'
import { Button } from 'react-bootstrap'


const Profile = props => {
  let dogs = () => props.user.dogs.map(dog => <Dog key={dog.id} dog={dog} />)
  return (
    <div className='staticLayout'>
      <h1>{props.user.name}</h1>
      {dogs()}
      {props.handleEdit ? <Button onClick={props.handleEdit}>Edit</Button> : null}
    </div>
  )
}

export default Profile;
