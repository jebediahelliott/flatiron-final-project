import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Home from '../components/Home'
import ClientNavBar from '../components/NavBar'
import About from '../components/About'
import TrainingPrograms from '../components/TrainingPrograms'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'

class Client extends Component {



  render () {
    return (

    )
  }
}

const mapStateToProps = state => {
  return {
    clients: state.clients
  }
}

export default connect(mapStateToProps)(Client)
