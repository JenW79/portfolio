import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero-section">
      <div className="section-wrap">
      <div className="hero-left">
        <div className="circle-container">
          <img src="/images/jen2.png" alt="Jennifer Williams" className="hero-image" />
        </div>
        <h1 className="hero-name">Jennifer Williams</h1>
        <p className="hero-title">Software Engineer</p>
        <button className="hero-button">LEARN MORE</button>
      </div>

      <div className="hero-right">
        <h2>About Me</h2>
        <hr />
        <p>
          I’m a junior software engineer passionate about building innovative,
          user-focused solutions. Currently advancing my skills at App Academy,
          I specialize in full-stack development with JavaScript, React,
          Node.js, and SQL. My background as an AI Evaluator brings valuable
          insight into optimizing logic and data. I’m excited to build tools
          that help people and businesses thrive.
        </p>
        <div className="hero-buttons">
          <a href="/resume.pdf" className="outline-button">
            Resume
          </a>
          <a href="#portfolio" className="outline-button">
            Portfolio
          </a>
        </div>
      </div>
      </div>
    </section>
  );
}
