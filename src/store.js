import {createStore, applyMiddleware, combineReducers} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage'; //look into this file
import {recipeReducer} from './reducers/index.js';
import {recipeBookReducer} from './reducers/recipe-book.js';
import authReducer from './reducers/authorization.js';
import protectedDataReducer from './reducers/protected-data.js';
import {setAuthToken, refreshAuthToken} from './actions/authorization.js';

//const store = createStore(recipeReducer, applyMiddleware(thunk))

const store = createStore(
  combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    recipe: recipeReducer,
    book: recipeBookReducer
  }),
  applyMiddleware(thunk)
);

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
