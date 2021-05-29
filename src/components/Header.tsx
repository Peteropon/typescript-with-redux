import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <NavLink
          className="nav-item"
          activeClassName="selected-nav-item"
          to="/"
          exact
        >
          Home
        </NavLink>
        &nbsp;
        {"| "}
        <NavLink
          className="nav-item"
          activeClassName="selected-nav-item"
          to="/results"
        >
          Results
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
