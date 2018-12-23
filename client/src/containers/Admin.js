import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import AdminHome from '../components/Home'
import AdminNavBar from '../components/NavBar'
import AdminAbout from '../components/About'
import AdminTrainingPrograms from '../components/TrainingPrograms'
import AdminFAQ from '../components/FAQ'
import AdminContact from '../components/Contact'
import Home from '../components/Home'
import NavBar from '../components/NavBar'
import About from '../components/About'
import TrainingPrograms from '../components/TrainingPrograms'
import FAQ from '../components/FAQ'
import Contact from '../components/Contact'
import authLogin from '../actions/authLogin'
import logout from '../actions/logout'
import Clients from '../components/Clients'


class Admin extends Component {

  handleLogin = (loginInfo) => {
    const login = authLogin();
    login(this.props.dispatch, loginInfo)
  }

  handleLogout = () => {
    const processLogout = logout()
    processLogout(this.props.dispatch)
  }

  render () {
    debugger
    return (
      <Router>
        <div>
          <AdminNavBar user={this.props.user} handleLogout={this.handleLogout} />
          <Route
            exact
            path='/'
            render={routerProps => <AdminHome {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/about'
            render={routerProps => <AdminAbout {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/training-programs'
            render={routerProps => <AdminTrainingPrograms {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/faq'
            render={routerProps => <AdminFAQ {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/contact'
            render={routerProps => <AdminContact {...routerProps} content={this.props.static} handleInquiry={this.handleInquiry} /> }
          />
          <Route
            exact
            path='/admin/clients'
            render={routerProps => <Clients {...routerProps} users={this.props.users} /> }
          />
        </div>
      </Router>
    )
  }
}

const mapStateToProps = state => {
  return {
    static: state.static,
    clients: state.clients,
    user: state.users.user
  }
}

export default connect(mapStateToProps)(Admin)
