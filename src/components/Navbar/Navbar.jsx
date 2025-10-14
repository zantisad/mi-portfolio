import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="nav-inner">
          <li className="logo">
            Portfolio -  Santiago Gonzalez
          </li>
          <li className="nav-actions">
            <a href="#contact" className="nav-link btn">
              <i className="bi bi-send"></i> Contacto
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
