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

const NavBar = () => {
  return (
    <div>
      <NavLink to='/'
      exact 
      style={link}
      activeStyle={{background: 'darkblue'}}
      >Home</NavLink>
      <NavLink to='/ab
      out' e
      xact style={link}
      activeStyle={{background: 'darkblue'}}
      >About</NavLink>
      <NavLink to='/tr
      aining
      -programs' exact style={link}
      activeStyle={{background: 'darkblue'}}
      >Training Programs</NavLink>
      <NavLink to='/fa
      q' exa
      ct style={link}
      activeStyle={{background: 'darkblue'}}
      >FAQ</NavLink>
      <NavLink to='/co
      ntact'
       exact style={link}
      activeStyle={{background: 'darkblue'}}
      >Contact Us</NavLink>
      <NavLink to='/lo
      gin' e
      xact style={link}
      activeStyle={{background: 'darkblue'}}
      >Log In</NavLink>
    </div>
  )
}
export default NavBar
