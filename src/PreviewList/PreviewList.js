import React from 'react';
import PropTypes from 'prop-types';
import PreviewItem from '../PreviewItem/PreviewItem';
import './PreviewList.scss';

const PreviewList = ({movies = []}) => {
  if (movies.length === 0) {
    return (
      <div className="empty-preview-list">
        <p className="empty-preview-list__title">
          No films found
        </p>
      </div>
    );
  } else {
    return (
      <div className="preview-list">
        {movies.map(movie => <PreviewItem movie={movie} key={movie.id} />)}
      </div>
    );
  }
};

PreviewList.propTypes = {
  movies: PropTypes.array,
};

export default PreviewList;
