import { API_BASE_URL } from '../config.js';
import {
//action creators for getting all recipes from a user
  fetchURecipesRequest,
  fetchURecipesSuccess,
  fetchURecipesERROR,
  getUserRecipes,
//action creators for adding a recipe from the main search
  addRecipeRequest,
  addRecipeSuccess,
  addRecipeError,
  addRecipeToUser,
//action creator for deleting a recipe from book
  deleteRecipeRequest,
  deleteRecipeSuccess,
  deleteRecipeError,
//action creator for adding original recipe
  originalRecipeRequest,
  originalRecipeSuccess,
  originalRecipeError,
  addOriginalRecipe
} from './recipe-book.js';

describe('fetchRecipesRequest', () => {
  it('should return the action', () => {
    const action = fetchURecipesRequest();
    expect(action.type).toEqual('FETCH_U_RECIPES_REQUEST')
  });
});

describe('fetchURecipesSuccess', () => {
  it('should return the action', () => {
    const recipes = [1, 2]
    const action = fetchURecipesSuccess(recipes)
    expect(action.type).toEqual('FETCH_U_RECIPES_SUCCESS')
    expect(action.recipes).toEqual(recipes);
  })
})

describe('fetchURecipesERROR', () => {
  it('should return the action', () => {
    const error = 'error';
    const action = fetchURecipesERROR(error);
    expect(action.type).toEqual('FETCH_U_RECIPES_ERROR');
    expect(action.error).toEqual('error');
  })
})

describe('getUserRecipes', () => {
  it('should dispatch fetchURecipesSuccess', () => {

    const recipes = [{label: 'title', ingredients: ['qwe', 'qwe']}];

    global.fetch = jest.fn().mockImplementation(() => {
      return Promise.resolve({
        ok: true,
        json() {
          return recipes

        }
      })
    })
    const getState = jest.fn(() => {
      return {auth: {
        authToken: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZm9vYmFyIiwiaWQiOiI1YmQwZDJhYmEyZDU2NTAwMTU4ZDEwYWEifSwiaWF0IjoxNTQwNTAwMDgzLCJleHAiOjE1NDExMDQ4ODMsInN1YiI6ImZvb2JhciJ9.W0JoL_Dd72F9DvRaqYtiwb4HpYcz3gLm7EsH1HcyAeA'
      }
      }});

    const dispatch = jest.fn();
    const authToken = getState().auth.authToken;
    return getUserRecipes()(dispatch, getState).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/recipebook`, {
        method: 'GET',
        headers: {
          authorization: `Bearer ${authToken}`,
          'Content-Type': 'application/json'
        }
      })
      expect(dispatch).toHaveBeenCalledWith(fetchURecipesRequest());
      expect(dispatch).toHaveBeenCalledWith(fetchURecipesSuccess(recipes));
    })
  })
})


//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//
//  })
//})
//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//  })
//})
//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//  })
//})
//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//  })
//})
//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//  })
//})
//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//  })
//})
//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//  })
//})
//describe('getUserRecipes', () => {
//  it('should return the action', () => {
//  })
//})
