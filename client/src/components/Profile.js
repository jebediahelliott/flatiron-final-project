import React from 'react'
import Dog from './Dog'

const Profile = props => {
  let dogs = () => props.user.dogs.map(dog => <Dog key={dog.id} dog={dog} />)
  return (
    <div className='staticLayout'>
      <h1>{props.user.name}</h1>
      {dogs()}
    </div>
  )
}

export default Profile;
