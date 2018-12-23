import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import './NavBar.css'



const AdminNavBar = (props) => {
  return (
    <div id='navBar'>
      <NavLink to='/'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Home</NavLink>
      <NavLink to='/admin/about'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >About</NavLink>
      <NavLink to='/admin/training-programs'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Training Programs</NavLink>
      <NavLink to='/admin/faq'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >FAQ</NavLink>
      <NavLink to='/admin/contact'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Contact Us</NavLink>
      <NavLink to='/admin/clients'
      exact
      className='navLink'
      activeStyle={{background: '#33691e', color: 'white'}}
      >Clients</NavLink>
      { props.user ? (
        <Link to='/'
        className='navLink'
        onClick={props.handleLogout}
        >Log Out</Link>
      ) : (
        <NavLink to='/login'
        exact
        className='navLink'
        activeStyle={{background: '#33691e', color: 'white'}}
        >Log In</NavLink>
      )}
    </div>
  )
}
export default AdminNavBar
