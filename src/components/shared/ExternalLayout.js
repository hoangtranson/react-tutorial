import React from "react";
import { Outlet, Link } from "react-router-dom";

function Layout() {
  return (
    <div className="container">
      <div className="flex gap-5 justify-center my-4">
        <Link to="/">Home</Link>
        <Link to="/login">Login</Link>
      </div>

      <div className="flex gap-5 justify-center flex-wrap">
        <Outlet />
      </div>
    </div>
  );
}

export default Layout;
