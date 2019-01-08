import React from 'react'
import Dog from './Dog'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Profile.css'


const Profile = props => {
  let dogs = props.user.dogs.map(dog => <Dog key={dog.id} dog={dog} />)
  return (
    <div className='staticLayout'>
      <h1>{props.user.name}</h1>
      <div>
       {dogs}
      </div>
      {props.admin ? <Link to={`${props.match.path}/edit`}><Button className='button'>Edit</Button></Link> : null}
    </div>
  )
}

export default Profile;
