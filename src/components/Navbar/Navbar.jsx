import React from "react";
import "./Navbar.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="container">
        <ul className="nav-inner">
          <li className="logo">
            <i className="bi bi-braces"></i> Santiago Gonzalez
          </li>
          <li className="nav-actions">
            <a href="#about" className="nav-link">
              Sobre mí
            </a>
            <a href="#projects" className="nav-link">
              Proyectos
            </a>
            <a href="#contact" className="nav-link btn">
              <i className="bi bi-send"></i> Contacto
            </a>
            <i className="menu-hamburguesa bi bi-list"></i>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
