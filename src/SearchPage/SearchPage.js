import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchMovies, moviesChangeSorting } from '../actions';
import { selectSortedMovies } from '../reducers/moviesReducer';
import Search from '../Search/Search';
import PreviewSettings from '../PreviewSettings/PreviewSettings';
import PreviewList from '../PreviewList/PreviewList';
import ErrorBoundary from '../ErrorBoundary';
import './SearchPage.scss';

const SearchPage = props => {
  const {
    movies,
    sortBy,
    fetchMovies,
    moviesChangeSorting,
    history,
  } = props;

  const handleSearch = (searchString, searchBy) => {
    const params = {
      search: searchString,
      searchBy,
    };
    fetchMovies(params);
    history.push(`/search/${searchString}`);
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

SearchPage.propTypes = {
  movies: PropTypes.array,
  sortBy: PropTypes.string,
  fetchMovies: PropTypes.func,
  moviesChangeSorting: PropTypes.func,
  history: PropTypes.object,
};

export default connect(mapStateToProps, mapDispatchToProps)(SearchPage);
