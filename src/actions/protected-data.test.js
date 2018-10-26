import {
  fetchProtectedDataSuccess,
  fetchProtectedDataError,
  fetchProtectedData
} from './protected-data.js';
import {API_BASE_URL} from '../config.js';

describe('fetchProtectedDataSuccess', () => {
  it('should return the action', () => {
    const data = 'data';
    const action = fetchProtectedDataSuccess(data);
    expect(action.type).toEqual('FETCH_PROTECTED_DATA_SUCCESS');
    expect(action.data).toEqual(data);
  })
})

describe('fetchProtectedDataError', () => {
  it('should return the action', () => {
    const error = 'error';
    const action = fetchProtectedDataError(error);
    expect(action.type).toEqual('FETCH_PROTECTED_DATA_ERROR');
    expect(action.error).toEqual(error);
  })
})

//describe('fetchProtectedData', () => {
//  it('should dispatch fetchProtectedDataSuccess', () => {
//    const authToken = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7InVzZXJuYW1lIjoiZm9vYmFyIiwiaWQiOiI1YmQwZDJhYmEyZDU2NTAwMTU4ZDEwYWEifSwiaWF0IjoxNTQwNTAwMDgzLCJleHAiOjE1NDExMDQ4ODMsInN1YiI6ImZvb2JhciJ9.W0JoL_Dd72F9DvRaqYtiwb4HpYcz3gLm7EsH1HcyAeA';
//
//    global.fetch = jest.fn().mockImplementation(() =>
//      Promise.resolve({
//        ok: true,
//        json() {
//          return {authToken};
//        }
//      })
//    )
//    const dispatch = jest.fn()
//    const getState = jest.fn(() => {
//      return {auth: {
//        authToken
//        }
//      }
//    })
//
//    const data = {data: 'someData'}
//    return fetchProtectedData()(dispatch, getState).then(() => {
//      const auth = getState().auth.authToken
//      expect(fetch).toHaveBeenCalledWith(`${API_BASE_URL}/protected`, {
//        method: 'GET',
//        headers: {
//          //provide our auth token as credentials
//          Authorization: `Bearer ${auth}`
//        }
//      })
//      expect(dispatch).toHaveBeenCalledWith(fetchProtectedDataSuccess(data));
//    })
//  })
//})


