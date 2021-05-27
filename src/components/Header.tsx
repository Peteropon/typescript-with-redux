import React from "react";
import { NavLink } from "react-router-dom";

const activeStyle = { color: "#F15B2A" };

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <NavLink className="nav-item" activeStyle={activeStyle} to="/" exact>
          Home
        </NavLink>
        &nbsp;
        {"| "}
        <NavLink className="nav-item" activeStyle={activeStyle} to="/results">
          Results
        </NavLink>
      </nav>
    </header>
  );
};

export default Header;
