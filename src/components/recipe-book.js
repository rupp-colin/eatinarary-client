import React from 'react';
import {connect} from 'react-redux';
import {getUserRecipes} from '../actions/recipe-book.js';
import UserRecipe from './user-recipe.js';
import OriginalRecipeForm from './orig-recipe-form.js';
import './recipe-book.css';


export class RecipeBook extends React.Component {

  state = {
    hideForm: true
  }

  componentDidMount() {
    this.props.dispatch(getUserRecipes())
  }

  showHideForm() {
    this.setState({
      hideForm: !this.state.hideForm
    })
  }

  render() {

    //let sampleData = ['recipe 1', 'recipe 2']
    //const listOfRecipes = sampleData.map((item, key) => <li key={key}>{item}</li>)
    let listOfRecipes = []
    listOfRecipes = this.props.userRecipes.map((recipe, index) => {
      return <UserRecipe key={index} {...recipe}/>
    });

    const username = this.props.user ? this.props.user.username : '';

    return (
      <main>
        <div className="nav-spacer"></div>
        <div className="row" id="user-recipes-header">
          <h2 className="col-8">{`${username}'s Recipe Book`}</h2>
          <button
            type="button"
            className="col-3 recipe-button"
            onClick={() => this.showHideForm()}
          >Add Original Recipe</button>
        </div>
        {!this.state.hideForm && <OriginalRecipeForm />}
        <div className="my-recipes row">
          <ul>{listOfRecipes}</ul>
        </div>
      </main>
    )
  }
}

const mapStateToProps = state => ({
  user: state.auth.currentUser,
  authToken: state.auth.authToken,
  loading: state.auth.loading,
  userRecipes: state.book.userRecipes
})

export default connect(mapStateToProps)(RecipeBook);

//get all recipes from currentuser
//
//display a heading of "currentUser's Recipe Book"
//// display "please log in to create a recipe book" if user is null TODO
//
//needs "create new recipe" button
////add functionality - makes component with add recipe form TODO
//
//display a similar div to search results
////*needs to pull list of user recipes from the state
////*needs a "more info button"
////
////*needs an "edit" button TODO
////"edit" button links to a form component TODO
////
////*needs a remove button
////
////*needs an "add to cart" button TODO
