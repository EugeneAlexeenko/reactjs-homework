import React from 'react';
import PropTypes from 'prop-types';
import { movieType } from '../types';
import MovieDetails from '../MovieDetails/MovieDetails';
import PreviewList from '../PreviewList/PreviewList';
import { connect } from 'react-redux';
import './MoviePage.scss';

const MoviePage = props => {
  const { movies } = props;
  const selectedMovieId = Number(props.match.params.id);
  const selectedMovie = movies.find(movie => (movie.id === selectedMovieId));

  return (
    <div className="movie-page">
        <header className="movie-page__header">
          <h1 className="movie-page__header-title">netflixroulette</h1>
          <MovieDetails movie={selectedMovie} />
        </header>

        <main className="movie-page__main">
          <PreviewList movies={movies} />
        </main>

        <footer className="movie-page__footer">
          <div>netflixroulette</div>
        </footer>
    </div>
  );
};

function mapStateToProps(store) {
  return {
    movies: store.movies.data,
  };
}

MoviePage.propTypes = {
  movies: PropTypes.arrayOf(movieType),
  match: PropTypes.object
};

export default connect(mapStateToProps)(MoviePage);
