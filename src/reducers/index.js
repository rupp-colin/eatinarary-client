import {
  FETCH_RECIPES_REQUEST,
  FETCH_RECIPES_SUCCESS,
  FETCH_RECIPES_ERROR,
} from '../actions/recipes.js';

const initialState = {
  hits: [],
  loading: false,
  error: null,
  isHidden: true
}

export const recipeReducer = (state = initialState, action) => {
  if (action.type === FETCH_RECIPES_REQUEST) {
    return Object.assign({}, state, {
      loading: true
    })
  } else if (action.type === FETCH_RECIPES_SUCCESS) {
    return Object.assign({}, state, {
      hits: action.hits,
      loading: false
    })
  } else if (action.type === FETCH_RECIPES_ERROR) {
    return Object.assign({}, state, {
      loading: false,
      error: action.error
    })

  } else {
    return state
  }
}
