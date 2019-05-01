import {
  shape,
  number,
  string,
  arrayOf,
 } from 'prop-types';

export const movieType = shape({
  budget: number,
  genres: arrayOf(string),
  id: number,
  overview: string,
  poster_path: string,
  release_date: string,
  revenue: number,
  runtime: number,
  tagline: string,
  title: string,
  vote_average: number,
  vote_count: number,
});
