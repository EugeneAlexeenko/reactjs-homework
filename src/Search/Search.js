import React, {useState} from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './Search.scss';

const Search = (props) => {
  const [searchString, setSearchString] = useState('');
  const [searchBy, setSearchBy] = useState('title');

  const handleSearchByTitle = () => {
    setSearchBy('title');
  };

  const handleSearchByGenre = () => {
    setSearchBy('genres');
  };

  const handleSearchInputChange = e => {
    setSearchString(e.target.value);
  };

  const handleSearchInputKeyPress = e => {
    if (e.key === 'Enter') {
      handleSubmit(searchString, searchBy);
      setSearchString('');
    }
  };

  const handleSubmit = () => {
    props.handleSubmit(
      searchString,
      searchBy
    );
  };

  return (
    <div className="search">
      <p className="search__title">Find your movie</p>

      <input
        className="search__input"
        type="text"
        value={searchString}
        onChange={handleSearchInputChange}
        onKeyPress={handleSearchInputKeyPress}
      />

      <div className="search__filters-container">
        <div className="search__filters-title">search by</div>
        <Button
          text="title"
          isActive={searchBy === "title"}
          clickHandler={handleSearchByTitle}
        />
        <Button
          text="genre"
          isActive={searchBy === "genres"}
          clickHandler={handleSearchByGenre}
        />
        <Button
          className="search-button"
          text="search"
          clickHandler={handleSubmit}
        />
      </div>

    </div>
  );
};

Search.propTypes = {
  handleSubmit: PropTypes.func,
};

export default Search;
