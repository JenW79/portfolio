import "./Skills.css";

export default function Skills() {
  const skills = [
    "JavaScript", "Python", "SQL", "HTML5", "CSS3", "React", "Redux",
    "Node.js", "Express", "Flask", "PostgreSQL", "Sequelize", "SQLAlchemy",
    "REST APIs","Docker", "Git", "TDD", "Agile", "AI Evaluation", "Content Strategy"
  ];

  return (
    <section className="skills-section" id="skills">
      <h2>Technical Skills</h2>
      <hr />
      <ul className="skills-list">
        {skills.map((skill, idx) => (
          <li key={idx} className="skill-item">{skill}</li>
        ))}
      </ul>
    </section>
  );
}
