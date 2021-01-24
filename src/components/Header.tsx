import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <header className="App-header">
      <nav>
        <NavLink to="/" exact>
          Home
        </NavLink>{" "}
        {" | "}
        <NavLink to="/results">Results</NavLink>
        <p>Oderland Test</p>
      </nav>
    </header>
  );
};

export default Header;
