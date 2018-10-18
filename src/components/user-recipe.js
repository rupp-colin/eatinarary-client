import React from 'react';

export default class UserRecipe extends React.Component {
  state = {
    isHidden: true
  }

  showHideInfo() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {

    const recipe = this.props;
    const image = recipe.image
      ? recipe.image
      : 'https://media.giphy.com/media/DtXfTSHi6mHFS/giphy.gif';
    return (
      <li>
        <div>
          <img src={image} alt={`${recipe.label}`}></img>
          <p>{recipe.label}</p>
          <button onClick={() => this.showHideInfo()}>More Info</button>
          {!this.state.isHidden && <MoreInfo recipe={recipe} />}
          <button type="button">Add to my recipes</button>
        </div>
      </li>
    )
  }
}

const MoreInfo = (props) => {
    return (<div>
      <h3>Ingredients</h3>
      <ul>{props.recipe.ingredientLines.map((ingredient, key) => <li key={`ingredient-${key}`}>{ingredient}</li>)}</ul>
      <h3>Health Facts</h3>
      <ul>{props.recipe.healthLabels.map((label, key) => <li key={`label-${key}`}>{label}</li>)}</ul>
      <h3>Notes</h3>
      {props.recipe.instructions
        ? <div><h4>Instructions</h4><p>{props.recipe.instructions}</p></div>
        : ''}
      {props.recipe.url
          ? <a href={props.recipe.url}>{props.recipe.url}</a>
          : ''}
    </div>)
  }
