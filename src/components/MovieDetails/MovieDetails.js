import React from 'react';
import { movieType } from '../../types';
import { getFullYear } from '../../utils';

import './MovieDetails.scss';

const MovieDetails = props => {
  const { movie } = props;

  if (!movie) {
    return null;
  }

  return (
    <div className="movie-details">
      <div className="movie-details__img-wrapper">
        <img className='movie-details__img' src={movie.poster_path} alt={movie.title}/>
      </div>
      <div className="movie-details__info-wrapper">
        <div className="movie-details__title-container">
          <span className="movie-details__title">{movie.title}</span>
          <span className="movie-details__rating">{movie.vote_average}</span>
        </div>
        <div className="movie-details__middle-container">
          <span className="movie-details__release-date">{getFullYear(movie.release_date)}</span>
          <span className="movie-details__runtime">{movie.runtime} min</span>
        </div>
        <p className="movie-details__description">{movie.overview}</p>
      </div>
    </div>
  );
};

MovieDetails.propTypes = {
  movie: movieType
};

export default MovieDetails;
