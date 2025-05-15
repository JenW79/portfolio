
import { useState } from "react";
import
import "./Portfolio.css";

const [selectedProject, setSelectedProject] = useState(null);

export default function Portfolio() {
  const projects = [
    {
      title: "Codehire",
      gif: "/images/codehire.gif",
      link: "https://codehire-ie8o.onrender.com",
    },
    {
      title: "TimeCapsule",
      gif: "/images/timecapsule.gif",
      link: "https://github.com/JenW79/thetimecapsule",
    },
    {
      title: "Bejeweled Fruits",
      gif: "/images/bejeweled.gif",
      link: "https://jenw79.github.io/bejeweled",
    },
    {
      title: "Tindog",
      gif: "/images/tindog.gif",
      link: "https://jenw79.github.io/tindog",
    },
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
        {selectedProject && (
          <ProjectModal
            project={selectedProject}
            onClose={() => setSelectedProject(null)}
          />
        )}
      </div>
    </section>
  );
}
