import type { Project } from "../types";
import "./Projects.css";

interface ProjectsProps {
    projects: Project[];
}

export default function ProjectsSection({ projects }: ProjectsProps) {
    return (
        <section className="projects-section" id="projects">
            <h2>Projects</h2>
            <div className="projects-grid">
                {projects.map((project) => (
                    <div key={project.name} className="project-card">
                        <div className="project-header">
                            <h3>{project.name}</h3>
                        </div>

                        <p className="project-description">{project.description}</p>

                        {project.technologies.length > 0 && (
                            <div className="technologies">
                                <h4>Technologies:</h4>
                                <div className="tech-tags">
                                    {project.technologies.map((tech) => (
                                        <span key={tech} className="tech-tag">
                                            {tech}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        )}

                        {(project.githubLink || project.liveLink) && (
                            <div className="project-links">
                                {project.githubLink && (
                                    <a 
                                        href={project.githubLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-secondary"
                                    >
                                        GitHub
                                    </a>
                                )}
                                {project.liveLink && (
                                    <a 
                                        href={project.liveLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        Live Demo
                                    </a>
                                )}
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </section>
    );
}