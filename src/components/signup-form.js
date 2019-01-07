import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input.js';
import {connect} from 'react-redux';
import {login, registerUser} from '../actions/authorization.js';
import {required, isTrimmed, nonEmpty, length, matches} from '../validators.js';
import {Redirect} from 'react-router';
import './login-form.css';
const passwordLength = length({min: 9, max:72});
const usernameLength = length({min:3, max: 12})
const matchesPassword = matches('password');


export class SignUpForm extends React.Component {

  onSubmit(values) {
    const {username, password} = values;
    const user = {username, password};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)))
  }

  render() {

    if (this.props.submitSucceeded) {
      return <Redirect to="/search" />
    }
    let error;
    if (this.props.error) {
      error= (
        <div className="form-error" aria-live="polite">
          {this.props.error}
        </div>
      )
    }


    return (
      <form
        className="login-form col-4"
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}>
        {error}
        <label htmlFor="username">User Name</label>
        <Field
          component={Input}
          type='text'
          name="username"
          validate={[required, usernameLength, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type='password'
          name="password"
          validate={[required, nonEmpty, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <Field
          component={Input}
          type='password'
          name="passwordConfirm"
          validate={[required, matchesPassword, nonEmpty]}
        />
        <button
          id="sign-up-form-button"
          disabled={this.props.pristine || this.props.submitting}>
          Sign Up
        </button>
      </form>
    );
  }
}

const mapStateToProps = state => ({
  error: state.auth.error
})

connect(mapStateToProps)(SignUpForm);

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) => dispatch(focus('signUp', 'username')),

})(SignUpForm);
