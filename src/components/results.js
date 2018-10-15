import React from 'react';
import {connect} from 'react-redux';
import {getSearchHits} from '../actions/recipes.js';

export class ResultsList extends React.Component {


  componentDidMount() {
    this.props.dispatch(getSearchHits())
  }

  render() {

    console.log(this.props)
    const listOfRecipes = this.props.hits.map((hit, index) => {
      return <li key={index}>
        <div>
          <img src={hit.recipe.image} alt={`${hit.recipe.label}`}></img>
          <p>{hit.recipe.label} {hit.recipe.url}</p>
          <button type="button">More Info</button>
          <div>
            <h3>Ingredients</h3>
              <ul>{hit.recipe.ingredientLines.map((ingredient, key) => <li key={`ingredient-${key}`}>{ingredient}</li>)}</ul>
            <h3>Health Facts</h3>
              <ul>{hit.recipe.healthLabels.map((label, key) => <li key={`label-${key}`}>{label}</li>)}</ul>
            <h3>Notes</h3>
            <p>{hit.recipe.url}</p>
          </div>
          <button type="button">Add to my recipes</button>
        </div>
      </li>
    })

    return (
      <div className="search-results">
        <ul>{listOfRecipes}</ul>
      </div>
    )

  }
}

const mapStateToProps = state => ({
  loading: state.loading,
  hits: state.hits
});

export default connect(mapStateToProps)(ResultsList);
