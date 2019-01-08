import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, NavLink, Redirect, withRouter } from 'react-router-dom';
import AdminNavBar from '../components/AdminNavBar'
import authLogin from '../actions/authLogin'
import logout from '../actions/logout'
import Clients from '../components/Clients'
import Login from '../components/Login'
import staticEdit from '../actions/staticEdit'
import Edit from '../components/Edit'
import FAQ from '../components/FAQ'
import Home from '../components/Home'
import About from '../components/About'
import TrainingPrograms from '../components/TrainingPrograms'
import Profile from '../components/Profile'



class Admin extends Component {
  constructor() {
    super()
    this.state = {
      page: null,
      index: null,
      client: ''
    }
  }

  handleLogin = (loginInfo) => {
    const login = authLogin();
    login(this.props.dispatch, loginInfo)
  }

  handleLogout = () => {
    localStorage.clear()
    const processLogout = logout()
    processLogout(this.props.dispatch)
  }

  handleStaticEdit = (id, editInfo, index) => {
    const sendEdit = staticEdit();
    sendEdit(id, editInfo, this.props.dispatch, index)
  }

  clientSelector = (client) => {
    this.setState({
      client: client
    })
  }

  trackPage = (path, index) => {
    if (path !== this.state.path && index !== this.state.index) {
      this.setState({
        path: path,
        index: index
      })
    }
  }

  render () {
    return (
      <Router>
        <div>
          <AdminNavBar user={this.props.user} handleLogout={this.handleLogout} />
          <Route
            exact
            path='/'
            render={routerProps => <Home {...routerProps} trackPage={this.trackPage} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/about'
            render={routerProps => <About {...routerProps} trackPage={this.trackPage} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/training-programs'
            render={routerProps => <TrainingPrograms {...routerProps} trackPage={this.trackPage} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/faq'
            render={routerProps => <FAQ {...routerProps} trackPage={this.trackPage} content={this.props.static} /> }
          />
          <Route
            exact
            path='/admin/clients'
            render={routerProps => <Clients {...routerProps} clients={this.props.clients} clientSelector={this.clientSelector} /> }
          />
          <Route
            path={`/admin/clients/:user`}
            render={routerProps => <Profile {...routerProps} user={this.state.client} admin={true} />}
          />
          <Route
            path='/edit'
            render={routerProps => <Edit {...routerProps} path={this.state.path} handleStaticEdit={this.handleStaticEdit} index={this.state.index} content={this.props.static[this.state.index]} /> }
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
    clients: state.users.clients,
    user: state.users.user
  }
}

export default connect(mapStateToProps)(Admin)
