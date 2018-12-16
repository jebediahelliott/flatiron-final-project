import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Route } from 'react-router-dom';
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


class App extends Component {

  handleLogin = (loginInfo) => {
    const login = authLogin();
    login(this.props.dispatch, loginInfo)
  }

  handleInquiry = (inquiryInfo) => {
    const inquiry = sendInquiry();
    inquiry(inquiryInfo)
  }


  render() {
    return (
      <Router>
        <div>
          <NavBar />
          <Route
            exact
            path='/'
            render={routerProps => <Home {...routerProps} content={this.props.static} /> }
          />
          <Route
            exact
            path='/about'
            render={routerProps => <About {...routerProps} content={this.props.static} /> } />
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
            render={routerProps => <Login {...routerProps} handleLogin={this.handleLogin} /> }
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {static: state.static}
}


export default connect(mapStateToProps)(App);
