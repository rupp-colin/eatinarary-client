import {createStore, applyMiddleware} from 'redux';
import {recipeReducer} from './reducers/index.js';
import thunk from 'redux-thunk';

const store = createStore(recipeReducer, applyMiddleware(thunk))

export default store;
