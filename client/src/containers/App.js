import React, { Component } from 'react';
import './App.css';
import { connect } from 'react-redux'
import Admin from './Admin'
import Client from './Client'
import Static from './Static'


class App extends Component {

  render() {
    let container
    if (this.props.user && this.props.user.isAdmin) {
      container = <Admin />
    }else if (this.props.user) {
      container = <Client />
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
