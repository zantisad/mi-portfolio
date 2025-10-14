import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-inner">
        <p className="muted">© {new Date().getFullYear()} Santiago Gonzalez — Frontend Developer</p>

        <p className="muted">
          Hecho con React · Deploy en Netlify · <i className="bi bi-stars"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
