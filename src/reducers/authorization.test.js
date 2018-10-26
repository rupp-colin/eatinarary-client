import {
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError,
} from '../actions/authorization.js';

import reducer from './authorization.js';

describe('reducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = undefined;
    const action = {
      type: '@@unknownAction'
    };

    const newState = reducer(state, action);
    expect(newState).toEqual({
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    })
  });

  it('Should return the current state on an unknown action', () => {
    const state = {
      authToken: null,
      currentUser: null,
      loading: false,
      error: null
    };
    const action = {
      type: '@@UNKOWN'
    };

    const newState = reducer(state, action);
    expect(newState).toEqual(state);
  });

  it('should handle the setAuthToken action', () => {
    const state = {
      authToken: null,
      error: null
    }
    const authToken = 'blue'
    const action = setAuthToken(authToken)
    const newState = reducer(state, action);
    expect(newState).toEqual({
      authToken: 'blue',
      error: null
    })
  });

  it('should handle the clearAuth action', () => {
    const state = {
      authToken: 'blue',
      currentUser: 'yellow'
    }
    const action = clearAuth();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      authToken: null,
      currentUser: null
    })
  });

  it('should handle the authRequest action', () => {
    const state = {
      loading: false,
      error: 'some error'
    }
    const action = authRequest();
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: true,
      error: null
    })
  });

  it('should handle the authSuccess action', () => {
    const state = {
      loading: true,
      currentUser: null
    }
    const user = 'yellow';
    const action = authSuccess(user)
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      currentUser: 'yellow'
    })
  });

  it('should handle the authError action', () => {
    const state = {
      loading: true,
      error: null
    }
    const error = 'green';
    const action = authError(error);
    const newState = reducer(state, action);
    expect(newState).toEqual({
      loading: false,
      error: 'green'
    })
  });
})
