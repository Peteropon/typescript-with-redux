import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <nav>
      <NavLink to="/" exact>
        Home
      </NavLink>
      {" | "}
      <NavLink to="/results">Results</NavLink>
      <header className="App-header">
        <p>Oderland Test</p>
      </header>
    </nav>
  );
};

export default Header;
