import { createContext, useEffect, useState } from "react";
import { authService } from "../../services/authService";

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  useEffect(() => {
    const storedUser = authService.getUser();
    if (storedUser) setUser(storedUser);
  }, []);

  const login = async (email, password) => {
    const loggedUser = await authService.login(email, password);
    setUser(loggedUser);
  };

  const signup = async (email, password) => {
    const newUser = await authService.signup(email, password);
    if (newUser) {
      setUser(newUser);
    }
    return newUser;
  };

  const logout = () => {
    authService.logout();
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, login, signup, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
