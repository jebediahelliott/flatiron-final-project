import React from 'react'
import Dog from './Dog'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import './Profile.css'


const Profile = props => {
  let dogs = () => {
    if (props.user.dogs) {
      return props.user.dogs.map(dog => <Dog key={dog.id} dog={dog} />)
    }else if (props.user.dogs_attributes) {
      let d = props.user.dogs_attributes
      return Object.keys(d).map(i => <Dog key={i} dog={d[i]} />)
    }
  }
  return (
    <div className='staticLayout'>
      <h1>{props.user.name}</h1>
      <div>
       {dogs()}
      </div>
      {props.admin ? <Link to={`${props.match.path}/edit`}><Button className='button'>Edit</Button></Link> : null}
    </div>
  )
}

export default Profile;
