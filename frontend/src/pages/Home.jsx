import { profile, skills } from '../data/model';

export default function Home() {
  return (
    <section className="section home-section" id="home">
      <div className="section-header">
        <p className="section-label">Welcome</p>
        <h2>{profile.name}</h2>
      </div>
      <p className="section-subtitle">
        I create responsive, user-focused web experiences using React, Node.js, and MongoDB.
        My goal is to deliver reliable applications with clean design, strong performance, and practical value.
      </p>

      <div className="profile-card">
        <div>
          <strong>{profile.title}</strong>
          <p>{profile.study}</p>
        </div>
        <div>
          <strong>Location</strong>
          <p>{profile.location}</p>
        </div>
      </div>

      <div className="contact-list">
        <div>
          <strong>Email</strong>
          <p>{profile.email}</p>
        </div>
        <div>
          <strong>Phone</strong>
          <p>{profile.phone}</p>
        </div>
        <div>
          <strong>GitHub</strong>
          <p><a href={profile.github} target="_blank" rel="noreferrer">{profile.githubHandle}</a></p>
        </div>
        <div>
          <strong>LinkedIn</strong>
          <p><a href={profile.linkedin} target="_blank" rel="noreferrer">{profile.linkedinHandle}</a></p>
        </div>
      </div>

      <div className="skills-grid">
        {skills.map((skill) => (
          <span key={skill} className="skill-pill">{skill}</span>
        ))}
      </div>
    </section>
  );
}
