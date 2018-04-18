import React from 'react';
import PropTypes from 'prop-types';
import Item from './Item';

export const List = ({
  items,
}) => (
  items.map((item, idx) =>
    <Item key={`customer-${idx}`} {...item} />
  )
);

List.propTypes = {
  items: PropTypes.array.isRequired,
}