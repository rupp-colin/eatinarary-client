import React from 'react';
import {getSearchHits} from '../actions/recipes.js';
import {connect} from 'react-redux';
import './search-form.css';

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
      <div className="search-bar row">
        <h2 className="col-12">Find recipes!</h2>
        <form
          className="col-12 search-form"
          onSubmit={this.handleSubmit}>
          <label htmlFor="searchTerm">search by recipe, ingredients, or health labels!</label><br/>
          <input className=" col-6" id="recipe-search" name="searchTerm" type="text" placeholder="avacado toast"></input>
          <button className="search-button">Search</button>
        </form>
      </div>
    )
  }
  }


export default connect()(SearchFrom);
