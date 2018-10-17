import React, { Component } from 'react';
import Header from './components/header.js';
import Main from './components/main.js';
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
        </div>
      </Router>
    );
  }
}

export default App;
