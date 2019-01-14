import React, { Component } from 'react';
import { connect } from 'react-redux';
import {BrowserRouter as Router, Route, Redirect } from 'react-router-dom';
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
import ClientEdit from '../components/ClientEdit'
import NewClient from '../components/NewClient'
import newUser from '../actions/newUser'
import updateUser from '../actions/updateUser'
import deleteUser from '../actions/deleteUser'
import deleteParagraph from '../actions/deleteParagraph'



class Admin extends Component {
  constructor(props) {
    super(props)
    this.state = {
      page: null,
      index: null,
      client: '',
      static: this.props.static,
      clients: this.props.clients
    }
  }

  addUser = (userInfo) => {
    const createUser = newUser()
    createUser(this.props.dispatch, userInfo)
    // this.setState({
    //   client: userInfo.user
    // })
  }

  deleteParagraph = (id, parentId) => {
    const remove = deleteParagraph()
    remove(this.props.dispatch, id, parentId)
  }

  editUser = (userInfo) => {
    const update = updateUser()
    update(this.props.dispatch, userInfo)
    let index = this.state.clients.findIndex(client => client.id === userInfo.user.id)
    let array = this.state.clients
    array[index] = userInfo.user
    this.setState({
      client: userInfo.user,
      clients: array
    })
  }

  deleteUser = (userInfo) => {
    const remove = deleteUser()
    remove(this.props.dispatch, userInfo)
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
  //Send edit to server, update local state
  handleStaticEdit = (id, editInfo, index) => {
    const sendEdit = staticEdit();
    sendEdit(id, editInfo, this.props.dispatch, index)
    let array = this.state.static
    array[index] = editInfo.static_page
    this.setState({
      static: array
    })
  }
  //Grab client iformation to pass to edit component
  clientSelector = (client) => {
    this.setState({
      client: client,
      clients: this.props.clients
    })
  }
  //track info from static pages to pass to edit page
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
            path='/admin/home'
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
            render={routerProps => <FAQ {...routerProps} trackPage={this.trackPage} content={this.state.static} /> }
          />
          <Route
            exact
            path='/admin/clients'
            render={routerProps => <Clients {...routerProps} clients={this.props.clients} clientSelector={this.clientSelector} /> }
          />
          <Route
            exact
            path='/admin/new'
            render={routerProps => <NewClient {...routerProps} addUser={this.addUser} />}
          />
          <Route
            exact
            path='/admin/clients/:user'
            render={routerProps => <Profile {...routerProps} user={this.state.client} admin={true} />}
          />
          <Route
            path='/admin/:static/edit'
            render={routerProps => <Edit {...routerProps} deleteParagraph={this.deleteParagraph} path={this.state.path} handleStaticEdit={this.handleStaticEdit} index={this.state.index} content={this.props.static[this.state.index]} /> }
          />
          <Route
            path='/admin/clients/:user/edit'
            render={routerProps => <ClientEdit {...routerProps} editUser={this.editUser} deleteUser={this.deleteUser} client={this.state.client} />}
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
