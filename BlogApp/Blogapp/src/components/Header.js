import React from "react";
import { NavLink } from "react-router-dom";
function Header() {
  return (
    <div>
      <h1
        style={{ color: "black", background: "#63C5DA", textAlign: "center" }}
      > Blog Development App
      </h1>

      <nav>
        <NavLink exact activeClassName="active" to="/">
          Home
        </NavLink>
        <br />
        <NavLink activeClassName="" to="/users">
          Create Blog
        </NavLink>
        <br />
      </nav>
    </div>
  );
}
export default Header;
