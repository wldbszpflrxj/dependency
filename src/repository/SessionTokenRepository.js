class SessionTokenRepository {
  TOKEN_KEY = "ACCESS_TOKEN";

  save(token) {
    sessionStorage.setItem(this.TOKEN_KEY, token);
  }

  get() {
    return sessionStorage.getItem(this.TOKEN_KEY);
  }

  remove() {
    sessionStorage.removeItem(this.TOKEN_KEY);
  }
}

export default SessionTokenRepository;
