import React from "react";
import { Outlet, Link } from "react-router-dom";

const Layout = () => {
  return (
    <div>
      <nav>
        <Link to="/">User Form</Link>
        ||
        <Link to="foodlist">Food Data</Link>
      </nav>
      <Outlet />
    </div>
  );
};

export default Layout;
