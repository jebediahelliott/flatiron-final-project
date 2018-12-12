import React from 'react';
import { NavLink } from 'react-router-dom';
import './NavBar.css'



const NavBar = () => {
  return (
    <div id='navBar'>
      <NavLink to='/'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Home</NavLink>
      <NavLink to='/about'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >About</NavLink>
      <NavLink to='/training-programs'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Training Programs</NavLink>
      <NavLink to='/faq'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >FAQ</NavLink>
      <NavLink to='/contact'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Contact Us</NavLink>
      <NavLink to='/login'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Log In</NavLink>
    </div>
  )
}
export default NavBar
