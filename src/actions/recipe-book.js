import { API_BASE_URL } from '../config.js';

export const FETCH_U_RECIPES_REQUEST = 'FETCH_U_RECIPES_REQUEST';
export const fetchURecipesRequest = () => ({
  type: FETCH_U_RECIPES_REQUEST
});

export const FETCH_U_RECIPES_SUCCES = 'FETCH_U_RECIPES_SUCCES';
//should return an array of recipes
export const fetchURecipesSUCCESS = (recipes) =>({
  type: FETCH_U_RECIPES_SUCCES,
  recipes
});

export const FETCH_U_RECIPES_ERROR = 'FETCH_U_RECIPES_ERROR';
export const fetchURecipesERROR = (error) => ({
  type: FETCH_U_RECIPES_ERROR,
  error
})

export const getUserRecipes = () => dispatch => {
  dispatch(fetchURecipesRequest());
  fetch(`${API_BASE_URL}/recipebook`, {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  })
    .then(result => result.json())
    .then(res => {
      dispatch(fetchRecipesSuccess(res.recipes))
    })
    .catch(err => {
      dispatch(fetchURecipesERROR(err))
    })
};
