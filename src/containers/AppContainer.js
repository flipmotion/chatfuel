import React, { Component } from 'react';
import { api } from '../api';
import debounce from 'lodash/debounce';
import App from '../components/App';

class AppContainer extends Component {
  constructor(props) {
    super(props);

    this.onSearch = debounce(this.search, 500)
    this.state = {
      value: '',
      customers: [],
      isLoading: false,
    }
  }

  componentDidMount() {
    this.setState({
      isLoading: true,
    });

    api.get.customers().then(customers => {
      this.setState({
        customers,
        isLoading: false,
      });
    });
  }

  search = value => {
    this.setState({
      isLoading: true,
    });

    api.get.search({ value }).then(customers => {
      this.setState({
        customers,
        isLoading: false,
      });
    });
  }

  onChange = ({ target : { value }}) => {
    this.setState({
      value,
    });

    this.onSearch(value);
  }

  render() {
    return (
      <App
        actions={{
          onChange: this.onChange,
        }}
        {...this.state}
      />
    );
  }
}

export default AppContainer;
