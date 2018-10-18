import React from 'react';
import {connect} from 'react-redux';

//get all recipes from currentuser TODO
//
//display a heading of "currentUser's Recipe Book"
//// display "please log in to create a recipe book" if user is null TODO
//
//needs "create new recipe" button
////add functionality - makes component with add recipe form TODO
//
//display a similar div to search results TODO
////*needs to pull list of user recipes from the state TODO
////*needs a "more info button" TODO
////
////*needs an "edit" button TODO
////"edit" button links to a form component TODO
////
////*needs a remove button TODO
////
////*needs an "add to cart" button TODO

export class RecipeBook extends React.Component {

  state = {
    userRecipes: []
  }

  componentDidMount() {
    this.props.dispatch(getUserRecipes())
  }

  render() {
    console.log(this.props)

    const listOfRecipes = <li>RECIPE 2</li>

    return (
      <main>
        <h2>{`${this.props.user}'s Ricepe Book`}</h2>
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
  loading: state.auth.loading
})

export default connect(mapStateToProps)(RecipeBook);
