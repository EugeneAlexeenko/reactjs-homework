import React from 'react';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import './PreviewSettings.scss';

const PreviewSettings = (props) => {
  const handleSortByReleaseDate = () => {
    props.handleSortByReleaseDate();
  };

  const handleSortByRating = () => {
    props.handleSortByRating();
  };

  if (props.moviesCount < 1) {
    return null;
  } else {
    return (
      <section className="settings">
        <div className="settings__content-container">
          <div className="settings__count">{props.moviesCount} movies found</div>
          <div className="settings__sort-by-container">
            <div className="settings__sort-by-label">Sort by</div>
            <Button
              className="settings__sort-by-button"
              activeClassName="settings__sort-by-button--active"
              isActive={props.sortBy === "RELEASE_DATE"}
              text="release date"
              clickHandler={handleSortByReleaseDate}
            >
            </Button>
            <Button
              className="settings__sort-by-button"
              activeClassName="settings__sort-by-button--active"
              isActive={props.sortBy === "RATING"}
              text="rating"
              clickHandler={handleSortByRating}
            >
            </Button>
          </div>
        </div>
      </section>
    );
  }
};

PreviewSettings.propTypes = {
  moviesCount: PropTypes.number,
  sortBy: PropTypes.string,
  handleSortByReleaseDate: PropTypes.func,
  handleSortByRating: PropTypes.func
};

export default PreviewSettings;
