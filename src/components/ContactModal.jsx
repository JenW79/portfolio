import { useState } from "react";
import emailjs from '@emailjs/browser';
import "./ContactModal.css";

export default function ContactModal({ show, onClose }) {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();

    // Honeypot check
    if (e.target.address.value) {
      console.log("Bot submission detected. Blocked.");
      return;
    }

    emailjs.sendForm(
      'service_keqvsg9',      // EmailJS service ID
      'template_syz0qll',     // EmailJS template ID
      e.target,
      'k8x1Gidgw7G6v3Ige'     // your public key
    ).then(() => {
      setSubmitted(true);
    }).catch((error) => {
      console.error('EmailJS error:', error);
      alert("Something went wrong, please try again later.");
    });
  };

  if (!show) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>×</button>
        <h2>Contact Me</h2>
        <hr />
        {submitted ? (
          <p className="thank-you-message">Thanks! Your message has been sent.</p>
        ) : (
          <form onSubmit={handleSubmit} className="contact-form">
            
            <input type="text" name="address" style={{ display: "none" }} tabIndex="-1" autoComplete="off" />

            <label htmlFor="name">Name</label>
            <input type="text" name="name" required />

            <label htmlFor="email">Email</label>
            <input type="email" name="email" required />

            <label htmlFor="message">Message</label>
            <textarea name="message" rows="5" required />

            <button type="submit">Send</button>
          </form>
        )}

        <div className="footer-links">
          <a href="https://github.com/JenW79" target="_blank" rel="noreferrer">GitHub</a>
          <a href="https://www.linkedin.com/in/jkwill646/" target="_blank" rel="noreferrer">LinkedIn</a>
        </div>
      </div>
    </div>
  );
}

