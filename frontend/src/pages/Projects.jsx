import { projects } from '../data/model';

export default function Projects() {
  return (
    <section className="section projects-section" id="projects">
      <div className="section-header">
        <p className="section-label">Projects</p>
        <h2>Featured work</h2>
      </div>
      <p>I have built these projects and pushed them to GitHub, where anyone can review the complete code and live demos.</p>
      <div className="projects-grid">
        {projects.map((project) => (
          <article className="project-card" key={project.title}>
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-tags">
              {project.tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
