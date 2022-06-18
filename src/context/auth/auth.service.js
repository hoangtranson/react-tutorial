const Auth = {
  isAuthenticated: false,
  login(callback) {
    Auth.isAuthenticated = true;
    setTimeout(callback, 100); //fake async.
  },
  logout(callback) {
    Auth.isAuthenticated = false;
    setTimeout(callback, 100);
  },
};

export default Auth;
