import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input.js';
import {login, registerUser} from '../actions/authorization.js';
import {required, isTrimmed, nonEmpty, length, matches} from '../validators.js';
const passwordLength = length({min: 9, max:72})
const matchesPassword = matches('password');

export class SignUpForm extends React.Component {

  onSubmit(values) {
    const {username, password, fullName} = values;
    const user = {username, password, fullName};
    return this.props
      .dispatch(registerUser(user))
      .then(() => this.props.dispatch(login(username, password)));
  }

  render() {
    return (
      <form
        className="login-form"
        onSubmit={this.props.handleSubmit(values => {
          this.onSubmit(values);
        })}>
        <label htmlFor="userName">User Name</label>
        <Field
          component={Input}
          type='text'
          name="userName"
          validate={[required, length, nonEmpty]}
        />
        <label htmlFor="password">Password</label>
        <Field
          component={Input}
          type='text'
          name="password"
          validate={[required, nonEmpty, passwordLength, isTrimmed]}
        />
        <label htmlFor="passwordConfirm">Confirm Password</label>
        <Field
          component={Input}
          type='text'
          name="passwordConfirm"
          validate={[required, matchesPassword, nonEmpty]}
        />
        <button
          type="submit"
          disabled={this.props.pristine || this.props.submitting}>
          Sign Up
        </button>
      </form>
    );
  }
}

export default reduxForm({
  form: 'signUp',
  onSubmitFail: (errors, dispatch) => {
    dispatch(focus('signUp', Object.keys(errors)[0]))
  }
})(SignUpForm);
