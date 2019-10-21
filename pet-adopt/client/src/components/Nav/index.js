import React from "react";
import { Link } from "react-router-dom";
import "./style.css";
import { faGithubAlt } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function Nav() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <a className="navbar-brand" href="/">
        Pet Search
      </a>
      <div id="navbarNav">
        <ul className="navbar-nav">
          <li className="nav-item" id="search">
            <a className="nav-link" href="/pets"><button type="button" className="btn">Search</button></a>
          </li>
          <li className="nav-item" id="admin">
            <a className="nav-link" href="/admin"><button type="button" className="btn">Admin</button></a>
          </li>
          <li className="nav-item" id="github" style={{position:'relative', top: "15px"}}>
            <a className="nav-link" href="https://github.com/Jrofalk/Pet-Adopt" target="_blank"><FontAwesomeIcon icon={faGithubAlt} style={{ color: 'black' }}/></a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Nav;