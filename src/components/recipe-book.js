import React from 'react';
import {connect} from 'react-redux';
import {getUserRecipes} from '../actions/recipe-book.js';
import UserRecipe from './user-recipe.js';

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
////*needs a remove button TODO
////
////*needs an "add to cart" button TODO

export class RecipeBook extends React.Component {

  componentDidMount() {
    this.props.dispatch(getUserRecipes())
  }

  render() {

    //let sampleData = ['recipe 1', 'recipe 2']
    //const listOfRecipes = sampleData.map((item, key) => <li key={key}>{item}</li>)
    const listOfRecipes = this.props.userRecipes.map((recipe, index) => {
      return <UserRecipe key={index} {...recipe}/>
    });

    const username = this.props.user ? this.props.user.username : '';

    return (
      <main>
        <h2>{`${username}'s Recipe Book`}</h2>
        <button>Add Original Recipe</button>
        <div className="my-recipes">
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
