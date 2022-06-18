import React, { useState } from "react";
import Auth from "./auth.service";

const AuthContext = React.createContext(null);

const AuthProvider = ({ children }) => {
  let [user, setUser] = useState(null);

  let signin = (user, callback) => {
    return Auth.signin(() => {
      setUser(user);
      callback();
    });
  };

  let signout = (callback) => {
    return Auth.signout(() => {
      setUser(user);
      callback();
    });
  };

  let value = { user, signin, signout };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContext, AuthProvider };
