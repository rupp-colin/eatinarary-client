import React from 'react';
import {connect} from 'react-redux';
import {deleteRecipeFromUser} from '../actions/recipe-book.js';
import './list-result.css';

export class UserRecipe extends React.Component {
  state = {
    isHidden: true
  }


  showHideInfo() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  deleteRecipe() {
    this.props.dispatch(deleteRecipeFromUser(this.props.id));
  }

  render () {
    const recipe = this.props;
    const image = recipe.image
      ? recipe.image
      : 'https://media.giphy.com/media/DtXfTSHi6mHFS/giphy.gif';
    return (
      <li>
        <div className="recipe row">
          <div className="col-3">
            <img className="recipe-pic" src={image} alt={`${recipe.label}`}></img>
          </div>
          <div className="recipe-label-container row">
            <h2 className="recipe-label">{recipe.label}</h2>
          </div>
        <div className="recipe-search-controls row">
          <button
            className="recipe-button col-4"
            onClick={() => this.showHideInfo()}>More Info</button>
          <button
            className="recipe-button col-4"
            type="button"
            onClick={() => this.deleteRecipe()}
          >Delete</button>
      </div>
      {!this.state.isHidden && <MoreInfo recipe={recipe} showHideInfo={() => this.showHideInfo()} />}
        </div>
      </li>
    )
  }
}

const MoreInfo = (props) => {
  return (
    <div>
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
          {props.recipe.instructions
              ? <div><h4>Instructions</h4><p>{props.recipe.instructions}</p></div>
            : ''}
            {props.recipe.url
                ? <a href={props.recipe.url}>{props.recipe.url}</a>
                : ''}
        </div>
      </div>

      <div className="recipe-search-controls row">
        <button
          className="recipe-button col-4"
          onClick={() => props.showHideInfo()}>Less Info</button>
      </div>
    </div>)
        }

export default connect()(UserRecipe);
