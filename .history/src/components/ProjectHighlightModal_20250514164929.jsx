import './ProjectHighlightModal.css';

export default function ProjectModal({ project, onClose }) {
  if (!project) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>×</button>
        <div className="modal-body">
          <div className="modal-left">
            <img src={project.preview} alt={`${project.title} preview`} />
            {project.phonePreview && (
              <img src={project.phonePreview} alt="Mobile preview" className="phone-preview" />
            )}
          </div>
          <div className="modal-right">
            <h2>{project.title}</h2>
            <hr />
            <p>{project.description}</p>
            <div className="stack-icons">
              {project.tech.map((tech, idx) => (
                <img key={idx} src={`/icons/${tech}.svg`} alt={tech} title={tech} />
              ))}
            </div>
            <div className="modal-buttons">
              <a href={project.demo} target="_blank" rel="noreferrer">Live Site</a>
              <a href={project.repo} target="_blank" rel="noreferrer">GitHub</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
