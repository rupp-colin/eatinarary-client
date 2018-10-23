import React, { Component } from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import RecipeBook from './components/recipe-book.js';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import LandingPage from './components/landing-page.js';
import {connect} from 'react-redux';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/search" component={Main} />
          <Route exact path="/myrecipes" render={() => {
            return this.props.authToken ? (
              <RecipeBook />
            ) : (
              <Redirect to="/" />
            )
          }}
          />
        </div>
      </Router>
    );
  }
}

const mapStateToProps = state => ({
  authToken: state.auth.authToken
})

export default connect(mapStateToProps)(App);
