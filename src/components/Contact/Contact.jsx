import React from "react";
import "./Contact.css";

const Contact = () => {
  return (
    <div id="contact" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="bi bi-send"></i> Contacto
        </h2>

        <div className="contact-single card">
          <div className="contact-inner">
            <p className="muted">
              Estoy buscando oportunidades para formar parte de un equipo y
              seguir creciendo como <b>Frontend Developer</b>. Si te interesa mi
              perfil, podés contactarme por cualquiera de los siguientes medios:
            </p>

            <ul className="contact-list">
              <li className="contact-item">
                <div className="contact-info">
                  <i className="bi bi-linkedin"></i>
                  <a
                    href="https://www.linkedin.com/in/santiago-gonzalez-dev/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="linkedin-link"
                  >
                    linkedin.com/in/santiago-gonzalez-dev
                  </a>
                </div>
                <a
                  href="https://www.linkedin.com/in/santiago-gonzalez-dev/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-btn"
                  aria-label="Ver perfil en LinkedIn"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </li>

              <li className="contact-item">
                <div className="contact-info">
                  <i className="bi bi-github"></i> github.com/zantisad
                </div>
                <a
                  href="https://github.com/zantisad"
                  target="_blank"
                  rel="noreferrer"
                  className="contact-btn"
                  aria-label="Ir a GitHub"
                >
                  <i className="bi bi-arrow-up-right"></i>
                </a>
              </li>

              <li className="contact-item">
                <div className="contact-info">
                  <i className="bi bi-envelope"></i> contactosantiagog@gmail.com
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
