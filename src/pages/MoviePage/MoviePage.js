import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { movieType } from '../../types';
import MovieDetails from '../../components/MovieDetails/MovieDetails';
import PreviewList from '../../components/PreviewList/PreviewList';
import Button from '../../components/Button/Button';
import { connect } from 'react-redux';
import './MoviePage.scss';

const MoviePage = props => {
  const { movies, history } = props;
  // useEffect is equivalent to componentDidMount
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  });
  const selectedMovieId = Number(props.match.params.id);
  const selectedMovie = movies.find(movie => (movie.id === selectedMovieId));
  const goToSearchPage = () => {
    return history.push('/');
  };

  return (
    <div className="movie-page">
        <header className="movie-page__header">
          <div className="movie-page__top-line">
            <h1 className="movie-page__header-title">netflixroulette</h1>
            <div className="movie-page__search-button-wrapper">
              <Button
                className="search-button search-button--white"
                text="search"
                clickHandler={goToSearchPage}
              />
            </div>
          </div>
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
  history: PropTypes.object,
  match: PropTypes.object,
};

export default connect(mapStateToProps)(MoviePage);
