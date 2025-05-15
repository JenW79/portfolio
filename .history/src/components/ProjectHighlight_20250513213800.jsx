import './ProjectHighlight.css';

export default function ProjectHighlight() {
  return (
    <section className="highlight">
      <div className="highlight-image">
        <img src="/images/codehire.png" alt="Codehire Project" />
      </div>
      <div className="highlight-content">
        <h2>Codehire</h2>
        <p>
          A full-stack job tracking app powered by OpenAI and two external job search APIs.
          Built with React, Redux, Express, and PostgreSQL. Users can search, save, and take notes
          on jobs — all while generating resumes with AI assistance.
        </p>
        <ul className="stack-list">
          <li>React</li>
          <li>Redux</li>
          <li>Express</li>
          <li>PostgreSQL</li>
          <li>OpenAI API</li>
        </ul>
        <div className="highlight-buttons">
          <a href="https://github.com/JenW79/codehire" target="_blank" rel="noreferrer">Code</a>
          <a href="https://codehire-ie8o.onrender.com" target="_blank" rel="noreferrer">Live Demo</a>
        </div>
      </div>
    </section>
  );
}
