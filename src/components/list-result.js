import React from 'react';
import {addRecipeToUser} from '../actions/recipe-book.js';
import {connect} from 'react-redux';

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
    console.log(this)
    const {recipe} = this.props
    return <li id={this.props.index}>
      <div>
        <img src={recipe.image} alt={`${recipe.label}`}></img>
        <p>{recipe.label}</p>
        <button onClick={() => this.showHideInfo()}>More Info</button>
        {!this.state.isHidden && <MoreInfo recipe={recipe} />}
        <button
          type="button"
          onClick={() => this.addRecipe()}
        >Add to my recipes</button>

      </div>
    </li>
  }
}


const MoreInfo = (props) => {
  console.log(props)
    return (<div>
      <h3>Ingredients</h3>
      <ul>{props.recipe.ingredientLines.map((ingredient, key) => <li key={`ingredient-${key}`}>{ingredient}</li>)}</ul>
      <h3>Health Facts</h3>
      <ul>{props.recipe.healthLabels.map((label, key) => <li key={`label-${key}`}>{label}</li>)}</ul>
      <h3>Notes</h3>
      <a href={props.recipe.url}>{props.recipe.url}</a>
    </div>)
  }

  export default connect()(ListResult)
