export default class ApiRequestor {
  static defaults = {
    baseUrl: 'http://localhost:3001/',
  };

  constructor(options) {
    this.options = {
      ...ApiRequestor.defaults,
      ...options,
    };
  }

  request({
    method,
    path: pathname,
    params,
  }) {
    const url = `${this.options.baseUrl}${pathname}`;
    return fetch(url, {
      method,
    }).then(r =>
      r.json()
    )
  }

  get = {
    search: ({ value }) => this.request({
      method: 'GET',
      path: `customers?q=${value}`,
    }),

    customers: () => this.request({
      method: 'GET',
      path: 'customers',
    }),
  }

  post = {}

  put = {}

  destroy = {}

  patch = {}
}

export const api = new ApiRequestor();
