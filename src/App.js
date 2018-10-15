import React, { Component } from 'react';
import Header from './components/header.js';
import Main from './components/main.js';


class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Main />
      </div>
    );
  }
}

export default App;
