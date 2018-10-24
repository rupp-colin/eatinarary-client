import React from 'react';
import {Field, reduxForm, focus} from 'redux-form';
import Input from './input';
import {login} from '../actions/authorization.js'
import {required, nonEmpty, isTrimmed} from '../validators.js';
import {Redirect} from 'react-router';
import './login-form.css';

export class LogInForm extends React.Component {

  render() {
    if(this.props.submitSucceeded) {
      return <Redirect to="/myrecipes" />
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
        onSubmit={this.props.handleSubmit}>
        {error}
        <label htmlFor="username">Username</label>
        <Field
          className="form-input"
          component={Input}
          type="text"
          name="username"
          id="username"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <label htmlFor="password">Password</label>
        <Field
          className="form-input"
          component={Input}
          type="password"
          name="password"
          id="password"
          validate={[required, nonEmpty, isTrimmed]}
        />
        <button disabled={this.props.pristine || this.props.submitting}>
          Log in
        </button>
      </form>
    )
  }
}

export default reduxForm({
  form: 'login',
  onSubmitFail: (errors, dispatch) => dispatch(focus('login', 'username')),
  //onSubmit is a prop of handleSubmit
  onSubmit: (values, dispatch) => {
    return dispatch(login(values.username, values.password))
  }
})(LogInForm)
