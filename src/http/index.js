class HttpClient {
  constructor(baseURL, tokenRepositry) {
    this.baseURL = baseURL;
    this.tokenRepositry = tokenRepositry;
  }

  fetch(url, options = {}) {
    return fetch(`${this.baseURL}${url}`, {
      ...options,
      headers: {
        Authorization: this.tokenRepositry.get(),
        ...options.headers,
      },
    });
  }
}

export default HttpClient;
