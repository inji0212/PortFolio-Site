// components/ProjectCard.tsx
"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
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
    <motion.div
      className="project-card bg-header w-full max-w-xl mx-[10vw] aspect-video flex flex-col items-center justify-center transform transition-transform duration-300 ease-in-out cursor-pointer shadow hover:scale-105"
      onClick={() => setIsOpen(true)}
      initial={{ opacity: 0, y: 50, rotateY: "45deg" }}
      whileInView={{ opacity: 1, y: 0, rotateY: "0deg" }}
      viewport={{ once: true, amount: 0.5 }}
      transition={{
        duration: 0.8,
        ease: "easeOut",
        delay: 0.2,
      }}
    >
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
    </motion.div>
  );
};

export default ProjectCard;
