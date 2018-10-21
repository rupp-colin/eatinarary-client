import React from 'react';
import {Link} from 'react-router-dom';
import {clearAuth} from '../actions/authorization.js';
import {clearAuthToken} from '../local-storage.js';
import {connect} from 'react-redux';

export class Menu extends React.Component {

  logOut() {
    this.props.dispatch(clearAuth());
    clearAuthToken();
  }

  render() {
    return (
      <nav>
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

  export default connect()(Menu)
