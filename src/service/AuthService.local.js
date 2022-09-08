class LocalAuthService {
  constructor(tokenRepository) {
    this.tokenRepository = tokenRepository;
  }

  signup(email, password) {
    this.tokenRepository.save("ACCESS_TOKEN");
  }

  signin(email, password) {
    this.tokenRepository.save("ACCESS_TOKEN");
  }

  logout() {
    this.tokenRepository.remove();
  }
}

export default LocalAuthService;
