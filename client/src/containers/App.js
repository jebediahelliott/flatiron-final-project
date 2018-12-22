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


class App extends Component {

  handleLogin = (loginInfo) => {
    const login = authLogin();
    login(this.props.dispatch, loginInfo)
  }

  handleInquiry = (inquiryInfo) => {
    const inquiry = sendInquiry();
    inquiry(inquiryInfo)
  }

  handleLogout = () => {
    const processLogout = logout()
    processLogout(this.props.dispatch)
  }


  render() {
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
            path='/about'
            render={routerProps => <About {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/training-programs'
            render={routerProps => <TrainingPrograms {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/faq'
            render={routerProps => <FAQ {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/contact'
            render={routerProps => <Contact {...routerProps} content={this.props.static} handleInquiry={this.handleInquiry} /> }
          />
          <Route
            exact
            path='/login'
            render={routerProps => (
              this.props.user ? (
                <Redirect to='/profile' />
              ) : (
                <Login {...routerProps} handleLogin={this.handleLogin} />)
            )}
          />
          <Route
            exact
            path='/profile'
            render={routerProps => <Profile {...routerProps} user={this.props.user} /> }
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return ({
    static: state.static,
    user: state.users.user
  })
}


export default connect(mapStateToProps)(App);
