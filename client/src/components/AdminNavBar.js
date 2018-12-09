import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
}

const AdminNavBar = () => {
  return (
    <div>
      <NavLink to='/'
      exact
      style={link}
      activeStyle={{background: 'darkblue'}}
      >Home</NavLink>
      <NavLink to='/about'
      xact style={link}
      activeStyle={{background: 'darkblue'}}
      >About</NavLink>
      <NavLink to='/training-programs'
      exact style={link}
      activeStyle={{background: 'darkblue'}}
      >Training Programs</NavLink>
      <NavLink to='/faq'
      exact style={link}
      activeStyle={{background: 'darkblue'}}
      >FAQ</NavLink>
      <NavLink to='/contact'
      exact style={link}
      activeStyle={{background: 'darkblue'}}
      >Contact Us</NavLink>
      <NavLink to='/'
      exact style={link}
      activeStyle={{background: 'darkblue'}}
      >Log Out</NavLink>
    </div>
  )
}
export default AdminNavBar
