import React from 'react';
import {getSearchHits} from '../actions/recipes.js';
import {connect} from 'react-redux';

export class SearchFrom extends React.Component {
  constructor() {
    super();
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    const searchTerm = event.target.searchTerm.value;
    this.props.dispatch(getSearchHits(searchTerm))
  }


  render () {
    return (
      <div>
        <h2>Find recipes!</h2>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="searchTerm">Search</label>
          <input id="recipe-search" name="searchTerm" type="text" placeholder="avacado toast"></input>
          <button>Search</button>
        </form>
      </div>
    )
  }
  }


export default connect()(SearchFrom);
