import React from 'react';

export default class ListResult extends React.Component {
  state = {
    isHidden: true
  }

  showHideInfo() {
    this.setState({
      isHidden: !this.state.isHidden
    })
  }

  render () {

    const {recipe} = this.props
    return <li>
      <div>
        <img src={recipe.image} alt={`${recipe.label}`}></img>
        <p>{recipe.label} {recipe.url}</p>
        <button onClick={() => this.showHideInfo()}>More Info</button>
        {!this.state.isHidden && <MoreInfo recipe={recipe} />}
        <button type="button">Add to my recipes</button>
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
      <p>{props.recipe.url}</p>
    </div>)
  }
