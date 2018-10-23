import React from 'react';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/authorization.js';
import {clearAuthToken} from '../local-storage.js';
import {connect} from 'react-redux';
import './menu.css'

export class Menu extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <nav className="main-nav">
        <p><Link to={'/myrecipes'}>My RecipeBook</Link></p>
        <p><Link to={'/search'}>Search</Link></p>
        <p><Link to={'/'}>login/sign-up</Link></p>
        <button
          className="sign-out-button"
          onClick={() => this.logOut()}>sign out</button>
      </nav>
    )

  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken,
  currentUser: state.auth.currentUser
})

export default connect(mapStateToProps)(Menu)
