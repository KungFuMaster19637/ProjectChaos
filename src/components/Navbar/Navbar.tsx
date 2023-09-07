/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";
import { Navbar_data } from "./Navbar_Data";

const NavBar = () => {
  const [state, setState] = useState(false);
  const changeClick = () => setState(!state);
  return (
    <nav className="navbar">
      <Link to="/home">
        <h2>Project Chaos</h2>
      </Link>
      <div className="menu-icons" onClick={changeClick}>
        <i className={state ? "fa fa-times" : "fa fa-bars"}></i>
      </div>
      <ul className={state ? "navbar-menu active" : "navbar-menu"}>
        {Navbar_data.map((item, index) => (
          <li key={index}>
            <Link to={item.url} className="nav-links">
              {item.title}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NavBar;
