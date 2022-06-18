import React, { useState } from "react";
import Auth from "./auth.service";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const login = (user, callback) => {
    return Auth.login(() => {
      setUser(user);
      callback();
    });
  };

  const logout = (callback) => {
    return Auth.logout(() => {
      setUser(user);
      callback();
    });
  };

  const value = { user, login, logout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
