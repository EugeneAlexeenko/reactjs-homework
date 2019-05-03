import axios from 'axios';
import * as types from '../constants/ActionTypes';

export const moviesRequestStart = () => ({
  type: types.MOVIES_REQUEST_START,
});

export const moviesRequestSuccess = data => ({
  type: types.MOVIES_REQUEST_SUCCESS,
  payload: data,
});

export const moviesRequestError = error => ({
  type: types.MOVIES_REQUEST_ERROR,
  payload: {
    error
  },
  error: true
});

export const moviesChangeSorting = sortBy => ({
  type: types.MOVIES_APPLY_SORTING,
  payload: sortBy,
});

export function fetchMovies(params) {
  const url ='http://react-cdp-api.herokuapp.com/movies';

  return dispatch => {
    dispatch(moviesRequestStart());

    return axios.get(url, {
      params: {
        search: params.search || '',
        searchBy: params.searchBy || '',
      }
    })
      .then(response => {
        dispatch(moviesRequestSuccess(response.data.data));
      })
      .catch(error => {
        dispatch(moviesRequestError(error));
      });
  }
}
