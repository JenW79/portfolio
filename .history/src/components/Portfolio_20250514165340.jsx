
import { useState } from "react";
import ProjectHighlightModal from "./ProjectHighlightModal";
import "./Portfolio.css";

export default function Portfolio() {
  const [selectedProject, setSelectedProject] = useState(null);

  const projects = [
    {
      title: "Codehire",
      gif: "/images/codehire.gif",
      preview: "/images/codehire-desktop.png",
      phonePreview: "/images/codehire-phone.png",
      description: "A job tracker powered by OpenAI and multiple APIs for real-time job search and AI-generated resumes.",
      tech: ["react", "redux", "nodejs", "postgresql"],
      demo: "https://codehire-ie8o.onrender.com",
      repo: "https://github.com/JenW79/codehire",
    },
    // other projects here...
  ];

  return (
    <section className="portfolio-section" id="portfolio">
      <h2>Portfolio</h2>
      <hr />
      <div className="portfolio-grid">
        {projects.map((project, index) => (
          <div className="portfolio-card" key={index}>
            <img src={project.gif} alt={`${project.title} demo`} />
            <h3>{project.title}</h3>
            <button onClick={() => setSelectedProject(project)}>
              Learn More
            </button>
          </div>
        ))}
      </div>

      {selectedProject && (
        <ProjectModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}