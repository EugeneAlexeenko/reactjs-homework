import React from 'react';
import PropTypes from 'prop-types';
import './Button.scss';

const Button = ({
                  isActive = false,
                  text = '',
                  clickHandler,
                  className = 'button',
                  activeClassName = 'button--active'
}) => {
  return (
    <button
      className={isActive ? `${className} ${activeClassName}` : className}
      onClick={clickHandler}
    >
      {text}
    </button>
  );
};

Button.propTypes = {
  isActive: PropTypes.bool,
  text:  PropTypes.string,
  clickHandler: PropTypes.func,
  className: PropTypes.string,
  activeClassName: PropTypes.string
};

export default Button;
