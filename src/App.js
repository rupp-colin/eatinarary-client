import React, { Component } from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
import RecipeBook from './components/recipe-book.js';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import LandingPage from './components/landing-page.js';
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Header />
          <Route exact path='/' component={LandingPage} />
          <Route exact path="/search" component={Main} />
          <Route exact path="/myrecipes" component={RecipeBook} />
        </div>
      </Router>
    );
  }
}

export default App;
