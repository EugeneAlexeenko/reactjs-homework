import moviesReducer, { initialState } from './moviesReducer';
import * as types from '../constants/ActionTypes';

describe('Movies reducer', () => {
  it('MOVIES_REQUEST_START', () => {
    const action = {
      type: types.MOVIES_REQUEST_START
    };

    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      data: [],
      isLoading: true,
    });
  });

  it('MOVIES_REQUEST_SUCCESS', () => {
    const initialState = {
      data: [],
      isLoading: true,
      error: null,
    };
    const action = {
      type: types.MOVIES_REQUEST_SUCCESS,
      payload: [1, 2],
    };

    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      data: [1, 2],
      isLoading: false,
    });
  });

  it('MOVIES_REQUEST_ERROR', () => {
    const initialState = {
      data: [],
      isLoading: true,
      error: null,
    };
    const action = {
      type: types.MOVIES_REQUEST_ERROR,
      payload: {
        error: 'Oops!',
      },
    };

    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      data: [],
      isLoading: false,
      error: 'Oops!',
    });
  });

  it('MOVIES_APPLY_SORTING', () => {
    const initialState = {
      sortBy: 'RELEASE_DATE',
    };
    const action = {
      type: types.MOVIES_APPLY_SORTING,
      payload: 'RATING',
    };

    expect(moviesReducer(initialState, action)).toEqual({
      ...initialState,
      sortBy: 'RATING'
    })
  });
});
