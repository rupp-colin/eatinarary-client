import React from 'react';

export default class SearchFrom extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const searchTerm = event.current.target;
    console.log(searchTerm);
  }


  render () {
    return (
      <div>
        <h2>Find recipes!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchTerm">Search</label>
          <input id="recipe-search" name="searchTerm" type="text" placeholder="avacado toast"></input>
          <button>Get Cookin'!</button>
        </form>
      </div>
    )
  }
}

