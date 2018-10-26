import {
  setAuthToken,
  clearAuth,
  authRequest,
  authSuccess,
  authError,
  login,
  refreshAuthToken,
  registerUser
} from './authorization.js';
import {API_BASE_URL} from '../config.js';
import jwtDecode from 'jwt-decode';

describe('setAuthToken', () => {
  it('should return the action', () => {
    const authToken = 'sometoken';
    const action = setAuthToken(authToken);
    expect(action.type).toEqual('SET_AUTH_TOKEN');
    expect(action.authToken).toEqual(authToken);
  })
})
describe('clearAuth', () => {
  it('should return the action', () => {
    const action = clearAuth();
    expect(action.type).toEqual('CLEAR_AUTH');
  })
})
describe('authRequest', () => {
  it('should return the action', () => {
    const action = authRequest();
    expect(action.type).toEqual('AUTH_REQUEST');
  })
})
describe('authSuccess', () => {
  it('should return the action', () => {
    const user = 'noobuser'
    const action = authSuccess(user)
    expect(action.currentUser).toEqual('noobuser');
    expect(action.type).toEqual('AUTH_SUCCESS');
  })
})
describe('authError', () => {
  it('should return the action', () => {
    const error = 'DANGER!';
    const action = authError(error);
    expect(action.error).toEqual('DANGER!');
    expect(action.type).toEqual('AUTH_ERROR');
  })
})
//async
describe('login', () => {
  it('should dispatch authSuccess', () => {
    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZm9vYmFyIiwiaWQiOiI1YmQwZDJhYmEyZDU2NTAwMTU4ZDEwYWEifSwiaWF0IjoxNTQwNTAwMDgzLCJleHAiOjE1NDExMDQ4ODMsInN1YiI6ImZvb2JhciJ9.W0JoL_Dd72F9DvRaqYtiwb4HpYcz3gLm7EsH1HcyAeA';

    global.fetch = jest.fn().mockImplementation(() =>
      Promise.resolve({
        ok: true,
        json() {
          return {authToken};
        }
      })
    )

    //start here
    const username = 'newuser1'
    const password = 'password123'
    const dispatch = jest.fn();
    return login(username, password)(dispatch).then(() => {
      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/auth`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        username,
        password
      })
      })
      expect(dispatch).toHaveBeenCalledWith(authRequest());

      const decodedToken = jwtDecode(authToken);
      expect(dispatch).toHaveBeenCalledWith(authSuccess(decodedToken.user))
    })
  })

})
//async
describe('refreshAuthToken', () => {

})
//async
describe('registerUser', () => {

})
