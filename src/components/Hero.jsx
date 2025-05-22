import { useState } from "react";
import ContactModal from "./ContactModal";
import "./Hero.css";

export default function Hero() {
  const [showContact, setShowContact] = useState(false);

  return (
    <section className="hero-section">
      <div className="section-wrap">
        <div className="side panel hero-left">
          <div className="circle-container">
            <img
              src="images/jen2.png"
              alt="Jennifer Williams"
              className="hero-image"
            />
          </div>
          <h1 className="hero-name">Jennifer Williams</h1>
          <p className="hero-title">Software Engineer</p>
          <button className="hero-button" onClick={() => setShowContact(true)}>
            Contact Me
          </button>
        </div>

        <div className="hero-right">
          <h2>About Me</h2>
          <hr />
          <p>
            I’m a software engineer focused on building thoughtful, full-stack
            solutions with React, Node.js, and SQL. With a background in AI
            evaluation and real-world projects, I thrive in collaborative teams
            and love turning ideas into usable products. Let's build something
            great together!
          </p>
          <div className="hero-buttons">
            <a
              href="resume/JenKWilliamsResume.pdf"
              className="outline-button"
              target="_blank"
              rel="noreferrer"
            >
              Resume
            </a>
            <a href="#portfolio" className="outline-button">
              Projects
            </a>
          </div>
        </div>
      </div>

      <ContactModal show={showContact} onClose={() => setShowContact(false)} />
      <img
        src="/images/hero-wave-divider.jpg"
        alt="Decorative section divider"
        className="hero-divider"
      />
    </section>
  );
}
