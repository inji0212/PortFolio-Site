// components/modals/ProjectModal.tsx
"use client";
import React from "react";
import { motion } from "framer-motion";

const ProjectModal = ({ project, onClose }: any) => (
  <motion.div
    initial={{ opacity: 0, scale: 0.9 }}
    animate={{ opacity: 1, scale: 1 }}
    transition={{ duration: 0.3 }}
    className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
    onClick={onClose}
  >
    <div
      className="bg-white dark:bg-gray-900 p-8 rounded-lg shadow-lg max-w-lg"
      onClick={(e) => e.stopPropagation()}
    >
      <button
        className="absolute top-4 right-4 text-gray-500"
        onClick={onClose}
      >
        ✕
      </button>
      <img src={project.image} alt={project.title} className="w-full mb-4" />
      <h3 className="text-2xl font-bold mb-2">{project.title}</h3>
      <p className="mb-4">{project.description}</p>
      <a
        href={project.url}
        className="bg-fuchsia-500 text-white px-4 py-2 rounded"
        target="_blank"
        rel="noopener noreferrer"
      >
        Visit Project
      </a>
    </div>
  </motion.div>
);

export default ProjectModal;
