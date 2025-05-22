// File: src/components/ContactModal.jsx  ..
import "./ContactModal.css";

export default function ContactModal({ show, onClose }) {
  if (!show) return null;

  return (
    <div className="contact-modal-overlay" onClick={onClose}>
      <div className="contact-modal" onClick={(e) => e.stopPropagation()}>
        <button className="close-button" onClick={onClose}>
          ×
        </button>
        <h2>Contact Me</h2>
        <hr />
        <form
          action="https://formsubmit.co/el/cipoja"
          method="POST"
          className="contact-form"
        >
          <input type="hidden" name="_captcha" value="true" />
          <input type="hidden" name="_template" value="box" />
          <input type="text" name="_honey" style={{ display: "none" }} />

          <label htmlFor="name">Name</label>
          <input type="text" name="name" required />

          <label htmlFor="email">Email</label>
          <input type="email" name="email" required />

          <label htmlFor="message">Message</label>
          <textarea name="message" rows="5" required />

          <button type="submit">Send</button>
        </form>
        <div className="footer-links">
          <a href="https://github.com/JenW79" target="_blank" rel="noreferrer">
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/jkwill646/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>
        </div>
      </div>
    </div>
  );
}
