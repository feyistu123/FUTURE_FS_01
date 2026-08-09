import { profile, skills } from '../data/model';

export default function About() {
  return (
    <section className="section about-section" id="about">
      <div className="section-header">
        <p className="section-label">About</p>
        <h2>Professional profile</h2>
      </div>

      <div className="about-grid">
        <div className="about-copy">
          <p>
            I am a motivated Full Stack Developer with experience building responsive React applications and RESTful APIs using Node.js, Express, and MongoDB.
            My work is driven by clear communication, reliable delivery, and practical problem solving.
          </p>
          <p>
            I enjoy turning ideas into polished products and collaborating with teams that value modern web practices, accessibility, and performance.
            I also explore AI and machine learning to keep my projects forward-looking and useful.
          </p>
          <p>
            I am currently focused on building maintainable applications that solve real problems while demonstrating strong front-end design and backend system thinking.
          </p>
        </div>

        <aside className="about-details card">
          <div>
            <h3>Quick facts</h3>
            <ul>
              <li><strong>Name:</strong> {profile.name}</li>
              <li><strong>Title:</strong> {profile.title}</li>
              <li><strong>Location:</strong> {profile.location}</li>
              <li><strong>Email:</strong> {profile.email}</li>
            </ul>
          </div>

          <div className="about-skills">
            <h3>Core skills</h3>
            <div className="skill-list">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </aside>
      </div>
    </section>
  );
}
