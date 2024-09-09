"use client";
import { useState } from "react";
import Modal from "./Modal";

const ProjectCard = ({ project }: { project: any }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card">
      <img src={project.image} alt={project.name} />
      <h2>{project.name}</h2>
      <p>{project.description}</p>
      <button onClick={() => setIsOpen(true)}>Learn More</button>
      {isOpen && <Modal project={project} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ProjectCard;
