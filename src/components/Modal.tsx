const Modal = ({ project, onClose }: { project: any; onClose: () => void }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <button onClick={onClose} className="close-button">
          Close
        </button>
        <h2>{project.name}</h2>
        <img src={project.image} alt={project.name} />
        <p>{project.details}</p>
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          View on GitHub
        </a>
      </div>
    </div>
  );
};

export default Modal;
