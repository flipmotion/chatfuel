import React from 'react';
import PropTypes from 'prop-types';

const Item = ({
  id,
  first_name: firstName,
  last_name: lastName,
  image_url: imageUrl,
}) => (
  <div className="search__item">
    <div>
      <p>{firstName}</p>
    </div>
    <div>
      <p>{lastName}</p>
    </div>
    <div>
      <p>{imageUrl}</p>
    </div>
  </div>
);

Item.propTypes = {
  id: PropTypes.number.isRequired,
  firstName: PropTypes.string.isRequired,
  lastName: PropTypes.string.isRequired,
  imageUrl: PropTypes.string.isRequired,
}

Item.defaultProps = {
  firstName: '',
  lastName: '',
  imageUrl: '',
}

export default Item;