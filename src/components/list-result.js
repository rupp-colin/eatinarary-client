import React from 'react';
import {addRecipeToUser} from '../actions/recipe-book.js';
import {connect} from 'react-redux';
import './list-result.css';

export class ListResult extends React.Component {
  state = {
    isHidden: true
  }

  showHideInfo() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  addRecipe() {
    return this.props.dispatch(addRecipeToUser(this.props.index))
  }

  render () {
    const {recipe} = this.props
    return <li id={this.props.index}>
      <div className="recipe row">
        <img className="recipe-pic col-3" src={recipe.image} alt={`${recipe.label}`}></img>
        <div className="recipe-label-container row">
          <h2 className="recipe-label">{recipe.label}</h2>
        <div className="clearfix"></div>
        </div>
        <div className="recipe-search-controls row">
        <button
          className="recipe-button col-4"
          onClick={() => this.showHideInfo()}>More Info</button>
          <button
            className="recipe-button add-button col-4"
            type="button"
            onClick={() => this.addRecipe()}
          >Add to my recipes</button>
      </div>
      {!this.state.isHidden && <MoreInfo recipe={recipe} showHideInfo={this.showHideInfo} addRecipe={this.addRecipe} />}

    </div>
  </li>
  }
}


const MoreInfo = (props) => {
  console.log(props)
  return (
    <div className="clearfix col-12 .fullwidth">
      <div className="col-6">
        <h3>Ingredients</h3>
        <ul>{props.recipe.ingredientLines.map((ingredient, key) => <li className="list-ingredient" key={`ingredient-${key}`}>{ingredient}</li>)}</ul>
      </div>
      <div className="col-6">
        <h3>Health Facts</h3>
        <ul>{props.recipe.healthLabels.map((label, key) => <li key={`label-${key}`}>{label}</li>)}</ul>
      </div>
      <div className="col-12">
        <h3>Notes</h3>
        <a href={props.recipe.url}>{props.recipe.url}</a>
      </div>
      {/*<div className="recipe-search-controls row">
        <button
          className="recipe-button col-4"
          onClick={() => props.showHideInfo()}>Less Info</button>
        <button
          className="recipe-button add-button col-4"
          type="button"
          onClick={() => props.addRecipe()}
        >Add to my recipes</button>
    </div>*/}

  </div>)
}

export default connect()(ListResult);
