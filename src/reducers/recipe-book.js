//import actions
import {
  FETCH_U_RECIPES_REQUEST,
  FETCH_U_RECIPES_SUCCES,
  FETCH_U_RECIPES_ERROR
} from '../actions/recipe-book.js';

//set initial state
const initialState = {
  userRecipes: [],
  loading: false,
  error: null,
  isHidden: true
}

//write recipeBookReducer
export const recipeBookReducer = (state = initialState, action) => {
  if (action.type === FETCH_U_RECIPES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_U_RECIPES_SUCCES) {
    return Object.assign({}, state, {
      loading: false,
      userRecipes = action.recipes
    })
  } else if (action.type === FETCH_U_RECIPES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })
  } else {
    return state
  }
}
