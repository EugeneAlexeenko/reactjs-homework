import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies, moviesChangeSorting } from './actions';
import { selectSortedMovies } from './reducers/moviesReducer';
import Search from './Search/Search';
import PreviewSettings from './PreviewSettings/PreviewSettings';
import PreviewList from './PreviewList/PreviewList';
import './App.scss';
import ErrorBoundary from "./ErrorBoundary";

const App = props => {
  const {
    movies,
    sortBy,
    fetchMovies,
    moviesChangeSorting,
  } = props;

  const handleSearch = (searchString, searchBy) => {
    const params = {
      search: searchString,
      searchBy,
    };
    fetchMovies(params);
  };

  const handleSortByReleaseDate = () => {
    moviesChangeSorting('RELEASE_DATE');
  };

  const handleSortByRating = () => {
    moviesChangeSorting('RATING');
  };

  return (

      <div className="app">
        <header className="app__header">
          <h1 className="app__header-title">netflixroulette</h1>

          <div className="app_search-container">
            <Search handleSubmit={handleSearch} />
          </div>
        </header>

        <main className="app__main">

          <PreviewSettings
            moviesCount={movies.length}
            sortBy={sortBy}
            handleSortByReleaseDate={handleSortByReleaseDate}
            handleSortByRating={handleSortByRating}
          />

          <ErrorBoundary>
            <PreviewList movies={movies} />
          </ErrorBoundary>

        </main>

        <footer className="app__footer">
          <div>netflixroulette</div>
        </footer>
      </div>

  );
};

function mapStateToProps(store) {
  return {
    sortBy: store.movies.sortBy,
    movies: selectSortedMovies(store.movies.data, store.movies.sortBy),
  };
}

function mapDispatchToProps(dispatch) {
  return {
    fetchMovies: query => dispatch(fetchMovies(query)),
    moviesChangeSorting: sortBy => dispatch(moviesChangeSorting(sortBy)),
  }
}

App.propTypes = {
  movies: PropTypes.array,
  sortBy: PropTypes.bool,
  fetchMovies: PropTypes.func,
  moviesChangeSorting: PropTypes.func,
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
