import React from "react";
import { Outlet, Link } from "react-router-dom";
import { BsCart4 } from "react-icons/bs";

const Layout = () => {
  return (
    <div>
      <header className="header">
        {/* should be a link */}
        <div>
          <Link to="/">Shop New</Link>
        </div>
        <div className="other-products">
          <h3>Shirts</h3>
          <h3>T-Shirts</h3>
          <h3>Shoes</h3>
          <div className="cart">
            <Link to="/cart">
              <BsCart4 />
            </Link>
          </div>
        </div>
      </header>
      <main></main>
      <Outlet />
    </div>
  );
};

export default Layout;
