import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { getFullYear } from '../utils';
import './PreviewItem.scss';

const PreviewItem = props => {
  const {
    id,
    poster_path,
    release_date,
    genres,
    title
  } = props.movie;

  return (
    <div className="item-preview">
      <Link
        to={`/movies/${id}`}
        className="item-preview__link"
      >
        <div className="item-preview__image-container">
          <img className='item-preview__image' src={poster_path} alt={title}/>
        </div>
        <div className="item-preview__title-container">
          <div className="item-preview__title">{title}</div>
          <div className="item-preview__release-date">{getFullYear(release_date)}</div>
        </div>
        <div className="item-preview__genres-container">
          {genres.map(genre => (
            <div key={genre} className="item-preview__genre">{genre}</div>
          ))}
        </div>
      </Link>
    </div>
  );
};

PreviewItem.propTypes = {
  movie: PropTypes.shape({
    id: PropTypes.int,
    poster_path: PropTypes.string,
    title: PropTypes.string,
    release_date: PropTypes.string,
    genres: PropTypes.arrayOf(PropTypes.string),
  }),
};

export default PreviewItem;
