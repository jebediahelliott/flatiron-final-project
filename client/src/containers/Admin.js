import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AdminHome from '../components/Home'
import AdminNavBar from '../components/NavBar'
import AdminAbout from '../components/About'
import AdminTrainingPrograms from '../components/TrainingPrograms'
import AdminFAQ from '../components/FAQ'
import AdminContact from '../components/Contact'


class Admin extends Component {



  render () {
    return (

    )
  }
}
export default connect(mapStateToProps)(Admin)
