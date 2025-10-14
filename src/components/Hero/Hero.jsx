import React from "react";
import "./Hero.css";
import avatar from "../../assets/avatar.jpg";

const Hero = () => {
  return (
    <div className="hero section">
      <div className="container hero-grid">
        <div className="hero-left">
          <h1 className="hero-title">
            Hola, soy <span className="gradient">Santiago Gonzalez</span> 👋
          </h1>
          <p className="hero-sub muted">
            Frontend Developer especializado en React. Carrera terminada en{" "}
            <b>Coderhouse</b> con enfoque en desarrollo web moderno, diseño
            funcional y experiencia de usuario. Apasionado por crear interfaces
            rápidas, limpias y visualmente atractivas.
          </p>

          <div className="hero-cta">
            <a href="#projects" className="btn">
              <i className="bi bi-grid-3x3-gap"></i> Ver proyectos
            </a>
            <a
              href="#contact"
              className="btn"
              style={{ borderColor: "var(--brand-2)" }}
            >
              <i className="bi bi-chat-dots"></i> Hablemos
            </a>
          </div>

          <div className="personal-info">
            <div className="info-item">
              <i className="bi bi-person-workspace"></i>
              <p>Frontend Developer</p>
            </div>
            <div className="info-item">
              <i className="bi bi-geo-alt"></i>
              <p>Uruguay</p>
            </div>
            <div className="info-item">
              <i className="bi bi-translate"></i>
              <p>Español / Inglés intermedio</p>
            </div>
          </div>
        </div>

        <div className="hero-right card">
          <img src={avatar} alt="Foto de Santi" className="hero-avatar" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
