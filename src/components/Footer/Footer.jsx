import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="footer">
      <div className="container footer-inner">
        <p className="muted">Santiago Gonzalez — Frontend Developer</p>

        <p className="muted">
          Hecho con React<i className="bi bi-stars"></i>
        </p>
      </div>
    </div>
  );
};

export default Footer;
