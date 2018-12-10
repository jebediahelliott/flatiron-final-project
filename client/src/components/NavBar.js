import React from 'react';
import { NavLink } from 'react-router-dom';
import {Navbar, Nav, NavItem } from 'react-bootstrap';

const link = {
  width: '100px',
  padding: '12px',
  margin: '0 6px 6px',
  background: 'blue',
  textDecoration: 'none',
  color: 'white',
  alignSelf: 'flex-end'
}

const NavBar = () => {
  return (
    <div>
      <Navbar>
        <Nav>
          <NavItem eventKey={1}>
            <NavLink to='/'
            exact
            // activeStyle={{background: 'lightgreen'}}
            >Home</NavLink>
          </NavItem>
          <NavItem eventKey={2}>
            <NavLink to='/about'
            exact
            // activeStyle={{background: 'lightgreen'}}
            >About</NavLink>
          </NavItem>
          <NavItem eventKey={3}>
            <NavLink to='/training-programs'
            exact
            // activeStyle={{background: 'lightgreen'}}
            >Training Programs</NavLink>
          </NavItem>
          <NavItem eventKey={4}>
            <NavLink to='/faq'
            exact
            // activeStyle={{background: 'lightgreen'}}
            >FAQ</NavLink>
          </NavItem>
          <NavItem eventKey={5}>
            <NavLink to='/contact'
            exact
            // activeStyle={{background: 'lightgreen'}}
            >Contact Us</NavLink>
          </NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem>
            <NavLink to='/login'
            exact
            // activeStyle={{background: 'lightgreen'}}
            >Log In</NavLink>
          </NavItem>
        </Nav>
      </Navbar>
    </div>
  )
}
export default NavBar
