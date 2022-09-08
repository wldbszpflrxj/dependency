class AuthService {
  constructor(httpClient, tokenRepository) {
    this.httpClient = httpClient;
    this.tokenRepository = tokenRepository;
  }

  signup(email, password) {
    this.httpClient
      .fetch("auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      })
      .then((res) => res.json())
      .then(({ access_token }) => this.tokenRepository.save(access_token));
  }

  signin(email, password) {
    this.httpClient
      .fetch("auth/signup", {
        method: "POST",
        body: JSON.stringify({
          email,
          password,
        }),
      })
      .then((res) => res.json())
      .then(({ access_token }) => this.tokenRepository.save(access_token));
  }

  logout() {
    this.tokenRepository.remove();
  }
}

export default AuthService;
