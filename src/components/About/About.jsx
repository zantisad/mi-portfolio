import React from "react";
import "./About.css";

const About = () => {
  return (
    <div id="about" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="bi bi-person"></i> Sobre mí
        </h2>
        <div className="about-grid">
          <div className="about-card card">
            <div className="about-card-inner">
              <h3>¿Quién soy?</h3>
              <p className="muted">
                Soy <b>Programador Frontend</b> especializado en desarrollo web
                con <b>React</b>. Me gusta crear interfaces limpias y
                funcionales, priorizando la experiencia del usuario. Estudié en{" "}
                <b>Coderhouse</b> y disfruto aprender nuevas tecnologías,
                trabajar en equipo y enfrentar desafíos que me hagan crecer como
                profesional.
              </p>

              <ul className="about-list">
                <li>
                  <i className="bi bi-check2-circle"></i> Enfocado en la mejora
                  constante
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i> Apasionado por el
                  diseño y los detalles
                </li>
                <li>
                  <i className="bi bi-check2-circle"></i> Disciplinado y
                  responsable
                </li>
              </ul>
            </div>
          </div>

          <div className="about-card card">
            <div className="about-card-inner">
              <h3>Stack principal</h3>
              <p className="muted">
                Tecnologías y herramientas que utilizo día a día para construir mis
                proyectos.
              </p>

              <div className="tech-grid">
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg"
                    alt="HTML"
                  />
                  <p>HTML</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg"
                    alt="CSS"
                  />
                  <p>CSS</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
                    alt="JavaScript"
                  />
                  <p>JavaScript</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bootstrap/bootstrap-original.svg"
                    alt="Bootstrap"
                  />
                  <p>Bootstrap</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg"
                    alt="Node.js"
                  />
                  <p>Node.js</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
                    alt="React"
                  />
                  <p>React</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/sass/sass-original.svg"
                    alt="Sass"
                  />
                  <p>Sass</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://www.svgrepo.com/show/374118/tailwind.svg"
                    alt="Tailwind CSS"
                  />
                  <p>Tailwind</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg"
                    alt="Git"
                  />
                  <p>Git</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
                    alt="GitHub"
                  />
                  <p>GitHub</p>
                </div>
                <div className="tech-item">
                  <img
                    src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg"
                    alt="VSCode"
                  />
                  <p>VSCode</p>
                </div>
              </div>
            </div>
          </div>

          <div className="about-card card">
            <div className="about-card-inner">
              <h3>Qué busco</h3>
              <p className="muted">
                Estoy en busca de oportunidades dentro de una <b>empresa</b>{" "}
                donde pueda seguir creciendo como <b>Frontend Developer</b> y
                aportar valor real a cada proyecto. Mi objetivo es aplicar todo
                lo aprendido en entornos profesionales, colaborar con equipos
                multidisciplinarios y enfrentar nuevos desafíos que me permitan
                evolucionar tanto técnica como personalmente. Me motiva la idea
                de formar parte de un ambiente donde se valore la{" "}
                <b>creatividad</b>, la <b>prolijidad en el código</b> y el{" "}
                <b>aprendizaje constante</b>. Aspiro a contribuir en el
                desarrollo de productos que generen impacto, manteniendo siempre
                una actitud curiosa, responsable y con foco en la mejora
                continua.
              </p>
              <a href="#contact" className="btn">
                <i className="bi bi-briefcase"></i> Trabajemos
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
