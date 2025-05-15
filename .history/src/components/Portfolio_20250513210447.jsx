import './Portfolio.css';

export default function Portfolio() {
  const projects = [
    {
      title: "Bejeweled Fruits",
      image: "/images/bejewled.png",
      demo: "https://jenw79.github.io/bejeweled/",
      code: "https://github.com/JenW79/bejeweled",
    },
    {
      title: "Tindog",
      image: "/images/tindogSS.png",
      demo: "https://jenw79.github.io/tindog/",
      code: "https://github.com/JenW79/tindog",
    },
    {
      title: "Adventure Game",
      image: "/images/adventuregame.png",
      demo: "https://jenw79.github.io/adventure-game/",
      code: "https://github.com/JenW79/aa04-adventure-project",
    },
  ];

  return (
    <section className="portfolio">
      <h2>Projects</h2>
      <div className="portfolio-grid">
        {projects.map((project, idx) => (
          <div key={idx} className="project-card">
            <img src={project.image} alt={project.title} />
            <h3>{project.title}</h3>
            <div className="buttons">
              <a href={project.demo} target="_blank" rel="noreferrer">Live Demo</a>
              <a href={project.code} target="_blank" rel="noreferrer">Source Code</a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
