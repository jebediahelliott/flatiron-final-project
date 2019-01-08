import React from 'react'
import Dog from './Dog'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'


const Profile = props => {
  let dogs = props.user.dogs.map(dog => <Dog key={dog.id} dog={dog} />)
  return (
    <div className='staticLayout'>
      <h1>{props.user.name}</h1>
      {dogs}
      {props.admin ? <Link to={`${props.match.path}/edit`}><Button>Edit</Button></Link> : null}
    </div>
  )
}

export default Profile;
