import {createStore, applyMiddleware} from 'redux';
//import {reducer as formReducer} from 'redux-form';
import thunk from 'redux-thunk';
//import {loadAuthToken} from './local-storage'; //look into this file
import {recipeReducer} from './reducers/index.js';
//import authReducer from // TODO make auth reducer
//import protectedDataReducer from //TODO make protected data reducer
//import {setAuthToken, refreshAuthToken} from //TODO make auth actions
const store = createStore(recipeReducer, applyMiddleware(thunk))

//const store = createStore(
//  combineReducers({
//    form: formReducer,
//    auth: authReducer,
//    protectedData: protectedDataReducer,
//    recipe: recipeReducer
//  }),
//  applyMiddleware(thunk)
//);

export default store;
