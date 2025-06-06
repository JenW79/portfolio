import "./ProjectHighlightModal.css";
import * as simpleIcons from "simple-icons";

const techIconMap = {
  react: { fa: true, class: "fa-react", prefix: "fab" },
  redux: { fa: false, si: simpleIcons.siRedux },
  nodejs: { fa: true, class: "fa-node-js", prefix: "fab" },
  javascript: { fa: true, class: "fa-js", prefix: "fab" },
  html5: { fa: true, class: "fa-html5", prefix: "fab" },
  css3: { fa: true, class: "fa-css3-alt", prefix: "fab" },
  python: { fa: true, class: "fa-python", prefix: "fab" },
  github: { fa: true, class: "fa-github", prefix: "fab" },
  postgresql: { fa: false, si: simpleIcons.siPostgresql },
  flask: { fa: false, si: simpleIcons.siFlask },
  express: { fa: false, si: simpleIcons.siExpress },
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
              {project.tech.map((tech, idx) => {
                const icon = techIconMap[tech];
                if (!icon) return <span key={idx}>{tech}</span>;

                if (icon.fa) {
                  return (
                    <i
                      key={idx}
                      className={`${icon.prefix} ${icon.class}`}
                      title={tech}
                      style={{ fontSize: "2rem", marginRight: "1rem" }}
                    />
                  );
                } else if (icon.si) {
                  return (
                    <svg
                      key={idx}
                      role="img"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                      title={icon.si.title}
                      style={{
                        height: "2rem",
                        width: "2rem",
                        marginRight: "1rem",
                        fill: '#d9dee0'
                      }}
                    >
                      <title>{icon.si.title}</title>
                      <path d={icon.si.path} />
                    </svg>
                  );
                }

                return null;
              })}
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
