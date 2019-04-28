import configureMockStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import moxios from 'moxios';

import * as types from '../constants/ActionTypes';

import {
  moviesRequestStart,
  moviesRequestSuccess,
  moviesRequestError,
  fetchMovies,
} from './index';

describe('Sync actions', () => {
  it('moviesRequestStart', () => {
    const expectedAction = {
      type: types.MOVIES_REQUEST_START,
    };

    expect(moviesRequestStart()).toEqual(expectedAction);
  });

  it('moviesRequestSuccess', () => {
    const data = [1, 2];
    const expectedAction = {
      type: types.MOVIES_REQUEST_SUCCESS,
      payload: data,
    };

    expect(moviesRequestSuccess(data)).toEqual(expectedAction);
  });

  it('moviesRequestError', () => {
    const testError = new Error('Oops');
    const expectedAction = {
      type: types.MOVIES_REQUEST_ERROR,
      payload: {
        error: testError,
      },
      error: true,
    };

    expect(moviesRequestError(testError)).toEqual(expectedAction);
  });
});

describe('Async actions', () => {
  const middlewares = [thunk];
  const mockStore = configureMockStore(middlewares);
  const store = mockStore({
    movies: [],
  });

  beforeEach(() => {
    moxios.install();
  });

  afterEach(() => {
    moxios.uninstall();
  });

  it('fetchMovies success case', () => {
    const response = {
      data: [
        {
          id: 218,
          title: 'The Terminator',
          release_date: '1984-10-26',
          vote_average: 7.4,
        },
        {
          id: 280,
          title: 'Terminator 2: Judgment Day',
          release_date: '1991-07-03',
          vote_average: 7.8,
        },
        {
          id: 296,
          title: 'Terminator 3: Rise of the Machines',
          release_date: '2003-07-02',
          vote_average: 5.9,
        }
      ]
    };

    moxios.wait(() => {
      const request = moxios.requests.mostRecent();

      request.respondWith({
        status: 200,
        response,
      });
    });

    const expectedActions = [
      moviesRequestStart(),
      moviesRequestSuccess(response.data),
    ];

    return store.dispatch(fetchMovies({search: 'test'}))
      .then(() => {
        const actualActions = store.getActions();
        expect(actualActions).toEqual(expectedActions);
      });
  });
});
