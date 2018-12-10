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

class App extends Component {
  render() {
    console.log(this.props.clients);
    return (
      <Router>
        <div>
          <NavBar />
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/training-programs' component={TrainingPrograms} />
          <Route exact path='/faq' component={FAQ} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/login' component={Login} />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => {
  return {clients: state.clients}
}

export default connect(mapStateToProps)(App);
