
import "./ProjectHighlightModal.css";

const techIconMap = {
  react: { class: "fa-react", prefix: "fab" },
  redux: { class: "fa-redux", prefix: "fab" },
  nodejs: { class: "fa-node-js", prefix: "fab" },
  javascript: { class: "fa-js", prefix: "fab" },
  html5: { class: "fa-html5", prefix: "fab" },
  css3: { class: "fa-css3-alt", prefix: "fab" },
  python: { class: "fa-python", prefix: "fab" },
  github: { class: "fa-github", prefix: "fab" },
  postgresql: { class: "fa-database", prefix: "fas" }, // no official Postgres icon
  flask: { class: "fa-flask", prefix: "fas" },         // flask is in solid set
};

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          ×
        </button>
        <div className="modal-body">
          <div className="modal-left">
            <img src={project.preview} alt={`${project.title} preview`} />
            {project.phonePreview && (
              <img
                src={project.phonePreview}
                alt="Mobile preview"
                className="phone-preview"
              />
            )}
          </div>
          <div className="modal-right">
            <h2>{project.title}</h2>
            <hr />
            <p>{project.description}</p>
            <div className="stack-icons">
              {project.tech.map((tech, idx) => (
                <i
                  key={idx}
                  className={`fab ${techIconMap[tech]}`}
                  title={tech}
                ></i>
              ))}
            </div>
            <div className="modal-buttons">
              <a href={project.demo} target="_blank" rel="noreferrer">
                Live Site
              </a>
              <a href={project.repo} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
