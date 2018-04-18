import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { List as Customers } from './List';
import Loader from './Loader';
import SearchField from './SearchField';

const NotFound = () => (
  <div className="text-center">
    NotFound
  </div>
);

class App extends Component {
  static propTypes = {
    customers: PropTypes.array.isRequired,
    value: PropTypes.string.isRequired,
    isLoading: PropTypes.bool,
    actions: PropTypes.object,
  }

  static defaultProps = {
    customers: [],
    value: '',
    isLoading: false,
    actions: {},
  }

  render() {
    const {
      customers,
      value,
      isLoading,
      actions: {
        onChange,
      },
    } = this.props;

    const isEmptyResults = !customers.length;
    const isShownNotFound = isEmptyResults && !isLoading;

    return (
      <div>
        <SearchField
          className="form-control search__field"
          type="text"
          placeholder="Search..."
          onChange={onChange}
          value={value}
        />
        <div className="search__results">
          {isLoading && <Loader />}
          {!isLoading && <Customers
            items={customers}
          />}
          {isShownNotFound && <NotFound />}
        </div>
      </div>
    );
  }
}

export default App;
