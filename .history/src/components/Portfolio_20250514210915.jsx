


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
      tech: ["react", "redux", "nodejs", "postgresql", "express", "javascript", "html5", "css3"],
      demo: "https://codehire-ie8o.onrender.com",
      repo: "https://github.com/JenW79/codehire",
    },
    {
    title: "TimeCapsule",
    gif: "/images/timecapsule.gif", 
    preview: "/images/timecapsule-desktop.png", 
    phonePreview: "/images/timecapsule-phone.png", 
    description: "A collaborative group project retro-inspired e-commerce app built with Flask and React (Vite), bringing back the best of the '80s, '90s, and 2000s through curated nostalgic items.",
    tech: ["react", "redux", "flask", "python", "sqlalchemy", "postgresql", "javascript", "html5", "css3"],
    demo: "https://timecapsule-dev-preview.onrender.com",
    repo: "https://github.com/JenW79/thetimecapsule",
  },
   {
    title: "Airbnb Clone",
    gif: "/images/airbnb.gif", 
    preview: "/images/airbnb-desktop.png", 
    phonePreview: "/images/airbnb-phone.png", 
    description: "A solo project that recreates core features of Airbnb including bookings, reviews, and user authentication. Built with full-stack technologies.",
    tech: ["react", "redux", "express", "sequelize", "postgresql", "javascript", "html5", "css3"],
    demo: "https://jens-auth-me.onrender.com/",
    repo: "https://github.com/JenW79/projectmod4",
  }
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
        <ProjectHighlightModal
          project={selectedProject}
          onClose={() => setSelectedProject(null)}
        />
      )}
    </section>
  );
}