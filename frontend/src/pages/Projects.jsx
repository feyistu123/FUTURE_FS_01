import { useState } from 'react';
import { projects } from '../data/model';

export default function Projects() {
  const [expandedProject, setExpandedProject] = useState(null);

  return (
    <section className="section projects-section" id="projects">
      <div className="section-header">
        <p className="section-label">Projects</p>
        <h2>Featured work</h2>
      </div>
      <p>I have built these projects and pushed them to GitHub, where anyone can review the complete code and live demos.</p>
      <div className="projects-grid">
        {projects.map((project) => {
          const isPerfume = project.title === 'Perfume Shopping';
          const isExpanded = expandedProject === project.title;

          return (
            <article className="project-card" key={project.title}>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="project-tags">
                {project.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>

              {isPerfume && project.galleryImages && (
                <>
                  <div className="project-card-footer">
                    <button
                      type="button"
                      className="button secondary small"
                      onClick={() => setExpandedProject(isExpanded ? null : project.title)}
                    >
                      {isExpanded ? 'Hide perfume app screens' : 'Show perfume app screens'}
                    </button>
                  </div>
                  {isExpanded && (
                    <div className="perfume-gallery">
                      {project.galleryImages.map((src, index) => (
                        <img key={index} src={src} alt={`Perfume ${index + 1}`} />
                      ))}
                    </div>
                  )}
                </>
              )}

              {project.liveDemo && (
                <div className="project-card-footer">
                  <a
                    href={project.liveDemo}
                    target="_blank"
                    rel="noreferrer"
                    className="button secondary small"
                  >
                    Live Demo
                  </a>
                </div>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}
