import React, {useState} from 'react';
import axios from 'axios';
import Search from './Search/Search';
import PreviewSettings from './PreviewSettings/PreviewSettings';
import PreviewList from './PreviewList/PreviewList';
import './App.scss';
import ErrorBoundary from "./ErrorBoundary";

const App = () => {
  const [sortBy, setSortBy] = useState('release date');
  const [movies, setMovies] = useState([]);
  // TODO: move url to env
  const baseUrl ='http://react-cdp-api.herokuapp.com/movies';

  const fetchMovies = (searchString, searchBy) => {
    return axios.get(`${baseUrl}?search=${searchString}&searchBy=${searchBy}`);
  };

  const handleSearch = (searchString, searchBy) => {
    fetchMovies(searchString, searchBy)
      .then(result => {
          const movies = result.data.data;
          setMovies(sortByReleaseDate(movies));
        });
  };

  const handleSortByReleaseDate = () => {
    setSortBy('release date');
    setMovies(sortByReleaseDate(movies));
  };

  const handleSortByRating = () => {
    setSortBy('rating');
    setMovies(sortByRating(movies));
  };

  const sortByReleaseDate = movies => {
    return movies.sort((a, b) => new Date(a.release_date) - new Date(b.release_date));
  };

  const sortByRating = movies => {
    return movies.sort((a, b) => a.vote_average - b.vote_average);
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

export default App;
