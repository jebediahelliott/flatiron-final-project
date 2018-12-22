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

  handleLogin = (loginInfo) => {
    const login = authLogin();
    login(this.props.dispatch, loginInfo)
  }

  handleLogout = () => {
    const processLogout = logout()
    processLogout(this.props.dispatch)
  }

  render () {
    return (
      <Router>
        <div>
          <NavBar user={this.props.user} handleLogout={this.handleLogout} />
          <Route
            exact
            path='/'
            render={routerProps => <Home {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/about'
            render={routerProps => <About {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/training-programs'
            render={routerProps => <TrainingPrograms {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/faq'
            render={routerProps => <FAQ {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/contact'
            render={routerProps => <Contact {...routerProps} content={this.props.static} handleInquiry={this.handleInquiry} /> }
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
    clients: state.clients
  }
}

export default connect(mapStateToProps)(Admin)
