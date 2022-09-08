import { createContext, useCallback, useContext } from "react";

export const AuthContext = createContext(null);

export const useAuth = () => useContext(AuthContext);

export function AuthProvider({ authService, children }) {
  const value = {
    // this binding
    signup: authService.signup.bind(authService),
    signin: authService.signin.bind(authService),
    logout: authService.logout.bind(authService),
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
