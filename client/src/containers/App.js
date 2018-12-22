import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import About from '../components/About'
import TrainingPrograms from '../components/TrainingPrograms'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import Login from '../components/Login'
import authLogin from '../actions/authLogin'
import '../components/staticPages.css'
import sendInquiry from '../actions/sendInquiry'
import logout from '../actions/logout'
import Profile from '../components/Profile'
import Admin from './Admin'


class App extends Component {

  render() {
    let container
    if (props.user.isAdmin) {
      container = <Admin />
    }else if (props.user) {
      container = <User />
    }else {
      container = <Static />
    }

    return (
      <div>
        {container}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return ({
    user: state.users.user
  })
}


export default connect(mapStateToProps)(App);
