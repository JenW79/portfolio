
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
    {
    title: "TimeCapsule",
    gif: "/images/timecapsule.gif", // Replace with your actual path
    preview: "/images/timecapsule-desktop.png", // Replace with your actual path
    phonePreview: "/images/timecapsule-phone.png", // Optional
    description: "A collaborative group project that allows users to post memories, tag locations, and revisit shared moments. Built with Flask, React, and Redux.",
    tech: ["react", "redux", "flask", "sqlalchemy", "postgresql"],
    demo: "https://timecapsule-dev-preview.onrender.com",
    repo: "https://github.com/JenW79/thetimecapsule",
  },
   {
    title: "Airbnb Clone",
    gif: "/images/airbnb.gif", // Replace with your actual path
    preview: "/images/airbnb-desktop.png", // Replace with your actual path
    phonePreview: "/images/airbnb-phone.png", // Optional
    description: "A solo project that recreates core features of Airbnb including bookings, reviews, and user authentication. Built with full-stack technologies.",
    tech: ["react", "redux", "express", "sequelize", "postgresql"],
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