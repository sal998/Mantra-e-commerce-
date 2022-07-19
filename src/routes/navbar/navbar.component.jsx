import React from "react";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as CrwnLogo } from "../../assets/crown.svg";
import "./navbar.styles.scss";

const Navigation = () => {
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <CrwnLogo className="logo" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/">
            SHOP
          </Link>
          <Link className="nav-link" to="/signIn">
            Sign In
          </Link>
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navigation;