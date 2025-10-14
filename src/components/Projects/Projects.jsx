import React, { useEffect, useState } from "react";
import "./Projects.css";
import projectsList from "../../assets/projects.json";

const coverUrl = (fileName) =>
  `${import.meta.env.BASE_URL}covers/${fileName}`;

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    setProjects(projectsList);
  }, []);

  return (
    <div id="projects" className="section">
      <div className="container">
        <h2 className="section-title">
          <i className="bi bi-grid-3x3"></i> Proyectos
        </h2>
        <p className="muted" style={{ marginBottom: 16 }}>
          Selección de proyectos recientes. Código limpio, componentes reutilizables y diseño prolijo.
        </p>

        <div className="projects-grid">
          {projects.map((p) => (
            <div className="project-card card" key={p.id}>
              <div className="project-img">
                <img
                  src={coverUrl(p.image)}
                  alt={p.title}
                  onError={(e) => {
                    e.currentTarget.src = `${import.meta.env.BASE_URL}covers/placeholder.jpg`;
                  }}
                />
              </div>

              <div className="project-info">
                <p className="text-title">{p.title}</p>
                <p className="text-body muted">{p.description}</p>

                <div className="project-tags">
                  {p.tags?.map((t) => (
                    <span key={t} className="badge">{t}</span>
                  ))}
                </div>

                <div className="project-actions">
                  {p.url && (
                    <a className="btn" href={p.url} target="_blank" rel="noreferrer">
                      <i className="bi bi-box-arrow-up-right"></i> Demo
                    </a>
                  )}
                  {p.repo && (
                    <a className="btn" href={p.repo} target="_blank" rel="noreferrer">
                      <i className="bi bi-github"></i> Repo
                    </a>
                  )}
                </div>
              </div>

              <div className="project-footer">
                <span className="text-title">#{String(p.id).padStart(2, "0")}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
