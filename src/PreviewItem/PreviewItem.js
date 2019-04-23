import React from 'react';
import PropTypes from 'prop-types';
import './PreviewItem.scss';

// Todo: add tests
const getYearFromDate = dateString => {
  const date = new Date(dateString);

  return date.getFullYear();
};

const PreviewItem = props => {
  const {
    poster_path,
    release_date,
    genres,
    title
  } = props.movie;

  return (
    <div className="item-preview">
      <div className="item-preview__image-container">
        <img className='item-preview__image' src={poster_path} alt={title}/>
      </div>
      <div className="item-preview__title-container">
        <div className="item-preview__title">{title}</div>
        <div className="item-preview__release-date">{getYearFromDate(release_date)}</div>
      </div>
      <div className="item-preview__genres-container">
        {genres.map(genre => (
          <div key={genre} className="item-preview__genre">{genre}</div>
        ))}
      </div>
    </div>
  );
};

PreviewItem.propTypes = {
  movie: PropTypes.shape({
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  })
};

export default PreviewItem;