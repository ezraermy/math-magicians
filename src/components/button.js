// Import React and Prop Types (Mandatory Steps).
import React from 'react';
import PropTypes from 'prop-types';

// Create our Button component as a functional component.
const Button = ({ label, className }) => (
  <input
    type="button"
    value={label}
    className={className}
  />
);

// Define the prop types for the Button component.
Button.propTypes = {
  label: PropTypes.string.isRequired,
  className: PropTypes.string.isRequired,
};

// Export our button component.
export default Button;
