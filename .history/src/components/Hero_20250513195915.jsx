import './Hero.css';

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <img
          src="/images/jen2.png"
          alt="Jennifer Williams"
          className="hero-image"
        />
        <h1>Jennifer Williams</h1>
        <p className="hero-role">Software Engineer</p>
        <a href="#about" className="hero-button">LEARN MORE</a>
      </div>

      <div className="hero-right">
        <h2>About Me</h2>
        <p>
          I’m a software engineer with a passion for building impactful,
          user-focused web applications. From React frontends to Postgres-backed
          APIs, I specialize in turning ideas into clean, functional code.
        </p>
        <div className="hero-links">
          <a href="/resume.pdf" className="outl
