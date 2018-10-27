import {createStore, applyMiddleware, combineReducers, compose} from 'redux';
import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
import {loadAuthToken} from './local-storage'; //look into this file
import {recipeReducer} from './reducers/index.js';
import {recipeBookReducer} from './reducers/recipe-book.js';
import authReducer from './reducers/authorization.js';
import protectedDataReducer from './reducers/protected-data.js';
import {setAuthToken, refreshAuthToken} from './actions/authorization.js';

//const store = createStore(recipeReducer, applyMiddleware(thunk))

  const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

  const reducer = combineReducers({
    form: formReducer,
    auth: authReducer,
    protectedData: protectedDataReducer,
    recipe: recipeReducer,
    book: recipeBookReducer
  })

  const store = createStore(reducer, /* preloadedState, */ composeEnhancers(
  applyMiddleware(thunk)
));

// Hydrate the authToken from localStorage if it exists
const authToken = loadAuthToken();
if (authToken) {
  const token = authToken;
  store.dispatch(setAuthToken(token));
  store.dispatch(refreshAuthToken());
}

export default store;
