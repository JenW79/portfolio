import { useState, useEffect } from "react";
import "./Testimonials.css";

const testimonials = [
  {
    text: "Jennifer’s ability to merge logic and creativity stood out on every stand-up.",
    author: "Peer Developer, App Academy"
  },
  {
    text: "Her React components were clean, reusable, and easy to scale.",
    author: "Group Project Review"
  },
  {
    text: "One of the most reliable and thoughtful teammates I’ve worked with.",
    author: "Team Member, Time Capsule Project"
  }
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => setCurrent((current + 1) % testimonials.length);
  const prevSlide = () => setCurrent((current - 1 + testimonials.length) % testimonials.length);

  useEffect(() => {
    const interval = setInterval(() => nextSlide(), 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="testimonials-section">
      <div className="testimonials-heading-wrap">
        <h2 className="testimonials-heading">What Others Say</h2>
      </div>

      <div className="testimonial-card">
        <blockquote>"{testimonials[current].text}"</blockquote>
        <p className="testimonial-author">— {testimonials[current].author}</p>
      </div>

      <div className="testimonial-controls">
        <button onClick={prevSlide} aria-label="Previous testimonial">&#10094;</button>
        <button onClick={nextSlide} aria-label="Next testimonial">&#10095;</button>
      </div>

      <img
        src={`${import.meta.env.BASE_URL}images/hero-wave-divider.jpg`}
        alt="Decorative section divider"
        className="hero-divider"
      />
    </section>
  );
}

