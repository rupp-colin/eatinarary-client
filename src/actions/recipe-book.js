import { API_BASE_URL } from '../config.js';


// ========================= GET ALL RECIPES FOR A USER ===================== //
export const FETCH_U_RECIPES_REQUEST = 'FETCH_U_RECIPES_REQUEST';
export const fetchURecipesRequest = (id) => ({
  type: FETCH_U_RECIPES_REQUEST
});

export const FETCH_U_RECIPES_SUCCES = 'FETCH_U_RECIPES_SUCCES';
//should return an array of recipes
export const fetchURecipesSuccess = (recipes) =>({
  type: FETCH_U_RECIPES_SUCCES,
  recipes
});

export const FETCH_U_RECIPES_ERROR = 'FETCH_U_RECIPES_ERROR';
export const fetchURecipesERROR = (error) => ({
  type: FETCH_U_RECIPES_ERROR,
  error
})

export const getUserRecipes = () => (dispatch, getState) => {
  const authToken = getState().auth.authToken;
  dispatch(fetchURecipesRequest());
  fetch(`${API_BASE_URL}/recipebook`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      authorization: `Bearer ${authToken}`
    },
  })
    .then(result => result.json())
    .then(recipes => {
      dispatch(fetchURecipesSuccess(recipes))
    })
    .catch(err => {
      dispatch(fetchURecipesERROR(err))
    })
};

//============================== ADD A RECIPE FROM SEARCH PAGE =========================== //

export const ADD_RECIPE_REQUEST = 'ADD_RECIPE_REQUEST';
export const addRecipeRequest = () => ({
  type: ADD_RECIPE_REQUEST
});

export const ADD_RECIPE_SUCCESS = 'ADD_RECIPE_SUCCESS';
export const addRecipeSuccess = () => ({
  type: ADD_RECIPE_SUCCESS
});

export const ADD_RECIPE_ERROR = 'ADD_RECIPE_ERROR';
export const addRecipeError = (error) => ({
  type: ADD_RECIPE_ERROR,
  error
});

export const addRecipeToUser = (index) => (dispatch, getState) => {
  const recipe = getState().recipe.hits[index].recipe;
  const authToken = getState().auth.authToken;
  dispatch(addRecipeRequest());
  fetch(`${API_BASE_URL}/recipebook`, {
    method: 'POST',
    headers: {
      'Content-Type': 'applications/json',
      authorization: `Bearer ${authToken}`
    },
    body: {recipe}
  })
    .then(result => result.json())
    .then(recipe => {
      dispatch(addRecipeSuccess(recipe))
    })
    .catch(err => {
      dispatch(addRecipeError());
    })
};
