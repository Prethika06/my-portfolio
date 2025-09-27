import React from "react";
import projects from "../data/projects";
import './Projects.css';


function Projects() {
  return (
    <section id="projects" className="projects-section">
      <h2 className="section-title">Projects</h2>
      <div className="projects-container">
        {projects.map(({ id, title, description, techStack, liveDemo, repo, image }) => (
          <div key={id} className="project-card">
            {/* Project Image */}
            <img src={image} alt={title} className="project-image" />

            {/* Project Title */}
            <h3 className="project-title">{title}</h3>

            {/* Project Description */}
            <p className="project-description">{description}</p>

            {/* Tech Stack */}
            <p className="project-techstack">
              Tech Stack: {techStack.join(", ")}
            </p>

            {/* Links */}
            <div className="project-links">
              <a href={liveDemo} target="_blank" rel="noopener noreferrer" className="project-link">
                Live Demo
              </a>
              <a href={repo} target="_blank" rel="noopener noreferrer" className="project-link">
                Source Code
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
