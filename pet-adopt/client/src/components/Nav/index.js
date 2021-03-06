import React from "react";
import { Link } from "react-router-dom";
import "./style.css";




function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Pet Adopt
      </a>
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" id="search">
            <a className="nav-link" href="/pets"><button type="button" className="btn">Search</button></a>
          </li>
          <li className="nav-item" id="admin">
            <a className="nav-link" href="/admin"><button type="button" className="btn">Admin</button></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;