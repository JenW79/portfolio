import './VideoShowcase.css';

export default function VideoShowcase() {
  return (
    <section className="video-showcase">
      <div className="video-container">
        <iframe
          src="https://www.youtube.com/embed/YOUR_VIDEO_ID"
          title="Project Demo"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      </div>

      <div className="video-description">
        <h2>Featured Demo: Codehire in Action</h2>
        <p>
          Watch how Codehire helps job seekers manage applications, generate resumes using AI,
          and track notes with real-time data from top job search APIs.
        </p>
        <div className="video-buttons">
          <a href="https://codehire-demo.onrender.com" target="_blank" rel="noreferrer">Live Site</a>
          <a href="https://github.com/JenW79/codehire" target="_blank" rel="noreferrer">Source Code</a>
        </div>
      </div>
    </section>
  );
}
