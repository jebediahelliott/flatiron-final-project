import React, {Component} from 'react'
import {FormGroup, ControlLabel, FormControl, HelpBlock, Button } from 'react-bootstrap'

class Login extends Component {
  constructor() {
    super()
    this.state = {
      email: '',
      password: ''
    }
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }


  render() {
    return (
      <div style={{margin: '10%'}}>
        <form style={{maxWidth: '300px'}}>
          <FormGroup
           controlId="loginForm"

          >
           <ControlLabel>Email</ControlLabel>
           <FormControl
             type="text"
             name="email"
             value={this.state.email}
             onChange={this.handleChange}
           />
           <ControlLabel>Password</ControlLabel>
           <FormControl
             type="password"
             name="password"
             value={this.state.password}
             onChange={this.handleChange}
           />
           <HelpBlock>Password must be at least 6 characters.</HelpBlock>
         </FormGroup>
         <Button type="submit">Log In</Button>
        </form>
      </div>
    )
  }
}

// validationState={this.getValidationState()}

export default Login;
