import React from 'react';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';

const NavBar = () => {
  return (
    <div>
      <NavLink to='/' exact>Home</NavLink>
      <NavLink to='/about' exact>About</NavLink>
      <NavLink to='/training-programs' exact>Training Programs</NavLink>
      <NavLink to='/faq' exact>FAQ</NavLink>
      <NavLink to='/contact' exact>Contact Us</NavLink>
      <NavLink to='/login' exact>Log In</NavLink>
    </div>
  )
}
export default NavBar
