import React from 'react';
import {Link} from 'react-router-dom'




export default class LoginForm extends React.Component {
  state = {
    LogInHidden:true,
    SignUpHidden: true
  }

  showHideLogIn() {
    this.setState({
      LogInHidden: !this.state.LogInHidden
    })
  }

  showHideSignUp(e) {
    this.setState({
      SignUpHidden: !this.state.SignUpHidden
    })
  }


  render() {
    return <form>
      <button type="button" onClick={() => this.showHideLogIn()}>Log In</button>
      {!this.state.LogInHidden && <LogIn />}
      <button type="button" onClick={() => this.showHideSignUp()}>Sign Up</button>
      {!this.state.SignUpHidden && <SignUp />}
      <button><Link to={'/search'}>Explore!</Link></button>
    </form>
  }
}


const LogIn = () => {
  //build log in form here
  return (
    <p>Login hide is working</p>
  )
}

const SignUp = () => {
  //build sign up form
  return (
    <p>sign up hide is working</p>
  )
}

