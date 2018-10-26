//import actions
import {
  FETCH_U_RECIPES_REQUEST, FETCH_U_RECIPES_SUCCESS, FETCH_U_RECIPES_ERROR,
  ADD_RECIPE_REQUEST, ADD_RECIPE_SUCCESS, ADD_RECIPE_ERROR,
  DELETE_RECIPE_REQUEST, DELETE_RECIPE_SUCCESS, DELETE_RECIPE_ERROR,
  ORIGINAL_RECIPE_REQUEST, ORIGINAL_RECIPE_SUCCESS, ORIGINAL_RECIPE_ERROR
} from '../actions/recipe-book.js';

//set initial state
const initialState = {
  userRecipes: [],
  loading: false,
  error: null,
  isHidden: true
}

//write recipeBookReducer -- should handle all the actions that
//take place within the /myrecipes route

export const recipeBookReducer = (state = initialState, action) => {
  //gets all of the users saved recipes from mongoDB
  if (action.type === FETCH_U_RECIPES_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === FETCH_U_RECIPES_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      userRecipes: action.recipes
    })
  } else if (action.type === FETCH_U_RECIPES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }

  //handles requests to add a recipe from the main search
  //page to the user
  else if (action.type === ADD_RECIPE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === ADD_RECIPE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      userRecipes: [action.recipe, ...state.userRecipes]
    })
  } else if (action.type === ADD_RECIPE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }

  //deletes a recipe from the user's recipe book
  else if (action.type === DELETE_RECIPE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === DELETE_RECIPE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      userRecipes: state.userRecipes.filter(recipe => recipe.id !== action.id)
    })
  } else if (action.type === DELETE_RECIPE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }

  //adds a recipe submitted from the "add original
  //recipe" button on the /myrecipes page
  else if (action.type === ORIGINAL_RECIPE_REQUEST) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    })
  } else if (action.type === ORIGINAL_RECIPE_SUCCESS) {
    return Object.assign({}, state, {
      loading: false,
      userRecipes: [action.recipe, ...state.userRecipes]
    })
  } else if (action.type === ORIGINAL_RECIPE_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  }

  else {
    return state
  }
}
