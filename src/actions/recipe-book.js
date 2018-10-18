import { API_BASE_URL } from '../config.js';

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
      console.log(recipes);
      dispatch(fetchURecipesSuccess(recipes))
    })
    .catch(err => {
      dispatch(fetchURecipesERROR(err))
    })
};
