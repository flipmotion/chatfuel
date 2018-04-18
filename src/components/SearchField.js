import React from 'react';
import PropTypes from 'prop-types';

const SearchField = ({
  onChange,
  className,
  type,
  placeholder,
  value,
}) => {
  return (
    <input
      className={className}
      type={type}
      placeholder={placeholder}
      onChange={onChange}
      value={value}
    />
  );
}

SearchField.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
}

export default SearchField;