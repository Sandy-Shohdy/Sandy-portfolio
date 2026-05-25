import type { Project } from "../types";
import DecorativeBackground from "./Decorativebackground";
import "./Projects.css";

interface ProjectsProps {
  projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
  return (
    <section className="projects-section" id="projects">
      <DecorativeBackground variant="default" />

      <h2>Projects</h2>
      <div className="projects-grid">
        {projects.map((project) => (
          <div key={project.name} className="project-card">
            {project.thumbnail && (
              <div className="project-image-wrapper">
                <img
                  src={project.thumbnail}
                  alt={project.name}
                  className="project-image"
                />
              </div>
            )}

            <div className="project-info">
              <div className="project-header">
                <h3>{project.name}</h3>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-footer">
                {project.technologies.length > 0 && (
                  <div className="technologies">
                    <div className="tech-tags">
                      {project.technologies.map((tech) => (
                        <span key={tech} className="tech-tag">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                <div className="card-links">
                  {project.liveLink && project.liveLink !== "on deployment" && (
                    <a
                      href={project.liveLink}
                      target="_blank"
                      rel="noreferrer"
                      className="card-btn card-btn-primary"
                    >
                      Live
                    </a>
                  )}
                  {project.liveLink === "on deployment" && (
                    <button
                      className="card-btn card-btn-primary card-btn-disabled"
                      disabled
                    >
                      Live
                    </button>
                  )}
                  {project.githubLink && project.githubLink !== "non" && (
                    <a
                      href={project.githubLink}
                      target="_blank"
                      rel="noreferrer"
                      className="card-btn"
                    >
                      GitHub
                    </a>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
