import React from "react";
import { Outlet, Link } from "react-router-dom";

const layout = () => {
  return (
    <div>
      <header className="header">
        {/* should be a link */}
        <div>
          <Link to="/">Shop New</Link>
        </div>
      </header>
      <Outlet />
    </div>
  );
};

export default layout;
