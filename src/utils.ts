class TokenService {
  static instance: TokenService;
  private jwt!: string;

  setToken(jwt: string) {
    this.jwt = jwt;
  }

  getToken() {
    return this.jwt;
  }

  public static getInstance(): TokenService {
    if (!TokenService.instance) {
      TokenService.instance = new TokenService();
    }
    return TokenService.instance;
  }
}

export const tokenInstance = TokenService.getInstance();
