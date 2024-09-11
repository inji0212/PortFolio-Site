// components/card/index.tsx
"use client";
import React, { useState } from "react";
import Modal from "./Modal";

interface ProjectCardProps {
  project: {
    name: string;
    githubLink: string;
    image: string;
    url: string;
    description: string;
  };
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="project-card bg-header w-full max-w-xl mx-[10vw] aspect-video flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out cursor-pointer shadow hover:scale-105">
      <img
        src={project.image}
        alt={project.name}
        className="w-full h-auto mb-4 rounded-md shadow-md"
      />
      <h2 className="text-xl font-semibold mb-2 text-fuchsia-500">
        {project.name}
      </h2>
      <p className="text-gray-700 dark:text-gray-300 mb-4">
        {project.description}
      </p>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 bg-fuchsia-500 text-white rounded-md hover:bg-fuchsia-600 transition duration-200"
      >
        Learn More
      </button>
      {isOpen && <Modal project={project} onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default ProjectCard;
