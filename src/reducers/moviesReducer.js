import {
  MOVIES_REQUEST_START,
  MOVIES_REQUEST_SUCCESS,
  MOVIES_REQUEST_ERROR,
  MOVIES_APPLY_SORTING,
} from '../constants/ActionTypes';

import {
  sortByReleaseDate,
  sortByRating,
} from '../utils';

export const initialState = {
  data: [],
  isLoading: false,
  sortBy: 'RELEASE_DATE',
  error: null,
};

export default function moviesReducer(state = initialState, action) {
  switch (action.type) {
    case MOVIES_REQUEST_START:
      return {
        ...state,
        isLoading: true
      };
    case MOVIES_REQUEST_SUCCESS:
      return {
        ...state,
        data: action.payload,
        isLoading: false
      };
    case MOVIES_REQUEST_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload.error,
      };
    case MOVIES_APPLY_SORTING:
      return {
        ...state,
        sortBy: action.payload,
      };
    default:
      return state;
  }
}

export const selectSortedMovies = (state, sortBy) => {
  if (state.length < 2) {
     return state;
  }

  switch (sortBy) {
    case 'RELEASE_DATE':
      return sortByReleaseDate(state);
    case 'RATING':
      return sortByRating(state);
    default:
      return state;
  }
}; 
