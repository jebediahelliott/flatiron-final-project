import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink, Redirect } from 'react-router-dom';
import AdminHome from '../components/AdminHome'
import AdminNavBar from '../components/AdminNavBar'
import AdminAbout from '../components/AdminAbout'
import AdminTrainingPrograms from '../components/AdminTrainingPrograms'
import AdminFAQ from '../components/AdminFAQ'
import authLogin from '../actions/authLogin'
import logout from '../actions/logout'
import Clients from '../components/Clients'
import Login from '../components/Login'
import staticEdit from '../actions/staticEdit'


class Admin extends Component {

  handleLogin = (loginInfo) => {
    const login = authLogin();
    login(this.props.dispatch, loginInfo)
  }

  handleLogout = () => {
    const processLogout = logout()
    processLogout(this.props.dispatch)
  }

  handleStaticEdit = (id, editInfo) => {
    const sendEdit = staticEdit();
    sendEdit(id, editInfo, this.props.dispatch)
  }

  render () {
    return (
      <Router>
        <div>
          <AdminNavBar user={this.props.user} handleLogout={this.handleLogout} />
          <Route
            exact
            path='/'
            render={routerProps => <AdminHome {...routerProps} content={this.props.static} handleStaticEdit={this.handleStaticEdit} /> }
          />
          <Route
            exact
            path='/admin/about'
            render={routerProps => <AdminAbout {...routerProps} content={this.props.static} handleStaticEdit={this.handleStaticEdit} /> }
          />
          <Route
            exact
            path='/admin/training-programs'
            render={routerProps => <AdminTrainingPrograms {...routerProps} content={this.props.static} handleStaticEdit={this.handleStaticEdit} /> }
          />
          <Route
            exact
            path='/admin/faq'
            render={routerProps => <AdminFAQ {...routerProps} content={this.props.static} handleStaticEdit={this.handleStaticEdit} /> }
          />
          <Route
            exact
            path='/admin/clients'
            render={routerProps => <Clients {...routerProps} users={this.props.users} /> }
          />
          <Route
            exact
            path='/login'
            render={routerProps => (
              (this.props.user && this.props.user.isAdmin) ? (
                <Redirect to='/admin/clients' />
              ) : (
                <Login {...routerProps} handleLogin={this.handleLogin} />)
            )}
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
