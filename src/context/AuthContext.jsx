import { createContext, useContext, useState } from "react";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const login = () => setIsLoggedIn(true);
  const logout = () => setIsLoggedIn(false);
  const toggleLogin = () => setIsLoggedIn((prev) => !prev);

  const value = { isLoggedIn, login, logout, toggleLogin };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// Convenience hook so you can do `const auth = useAuth()`
export const useAuth = () => {
  const ctx = useContext(AuthContext);
  if (!ctx) {
    throw new Error("useAuth must be used inside <AuthProvider>");
  }
  return ctx;
};
